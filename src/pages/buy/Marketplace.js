import React, { useState, useEffect } from "react";
import { Grid, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, TablePagination, Paper, TextField, Button } from '@mui/material';
import useStyles from "./styles";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

import AboutSecBg from "../../images/common/aboutSecBg.png";
import ProductDetails from "./productDetails/ProductDetails";

function Marketplace() {
    const classes = useStyles();
    const navigate = useNavigate();
    const [productDetailPage, setProductDetailPage] = useState(false);
    const [productInfo, setProductInfo] = useState({});

    const rowsPerPageOptions = [5, 10, 25];
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(rowsPerPageOptions[0]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const data = [
    ];
    const handleBuy = (item) => {
        setProductInfo(item);
        setProductDetailPage(true)
    }
    const handleSell = () => {
        debugger
    }

    const [searchText, setSearchText] = useState('');
    const [products, setProducts] = useState([]);
    const [lwinBatches, setLwinBatches] = useState([]);

    const Products = [
        {
            name: "Adrianna Mundus Bacillus Terrae",
            color: "red",
            bestSell: "$100.00",
            bestBuy: "$2000",
            lastTrade: "$250.00 - 100% up",
            save: true, // true or false
        },
        {
            name: "Adrianna Mundus test Terrae",
            color: "white",
            bestSell: "$100.00",
            bestBuy: "$2000",
            lastTrade: "$250.00 - 100% up",
            save: false, // true or false
        }
    ];

    const filteredProducts = Products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));


    const loadProducts = () => {
        fetch("http://localhost:7655/productlist")
            .then(response => {
                if (!response.ok) {
                    console.log(response.status);
                }
                return response.json();
            })
            .then(data => {
                var batches = splitArrayIntoBatches(data.map(item => item.lwin11.toString()), 50);
                setLwinBatches(batches);
                setProducts(data);
               // getPriceData(data);
            })
            .catch(error => {
                console.error(error);
            });
    };

    const getWineColour = () => {

    }

    const getPriceData = (dbData) => {

        const allPriceData = [];

        const fetchPriceData = (batchIndex) => {
            if (batchIndex < lwinBatches.length) {
                const lwinArray = lwinBatches[batchIndex];

                const baseUrl = "https://sandbox-api.liv-ex.com";
                const priceDataUrl = "/data/v2/priceData";
                const lwinViewUrl = "/lwin/view/v1/lwinView";

                const priceDataParams = {
                    lwin: lwinArray,
                    priceType: ["B", "C", "F"],
                    priceDate: "",
                    currency: "usd",
                };

                var headerParams = {
                    'CLIENT_KEY': 'bbe4300c-53c1-4e09-86e9-edbf9d30c178',
                    'CLIENT_SECRET': 'MXcIEoDY',
                    'ACCEPT': 'application/json',
                    'CONTENT-TYPE': 'application/json'
                }
                debugger;
                //for priceData Api
                fetch(baseUrl + priceDataUrl, {
                    method: 'POST',
                    headers: headerParams,
                    body: JSON.stringify(priceDataParams)
                })
                    .then(res => res.json())
                    .then(priceData => {
                        allPriceData.push(priceData);
                        console.log(priceData);
                        fetchPriceData(batchIndex + 1);
                    })
                    .catch(error => {
                        console.error(error);
                    });

            } else {

                const combinedData = products.map(product => {
                    debugger;
                    const lwinDetail = allPriceData.find(priceData => priceData.lwinDetail.some(item => item.lwin === product.lwin11.toString()));
                    if (lwinDetail) {
                        //const combinedItem = lwinDetail.find(item => item.lwin === dbItem.lwin11.toString());
                        return {
                            ...product,
                            bestBuy: lwinDetail.dataDetail.find(dataItem => dataItem.priceType === "B"),
                            bestSell: lwinDetail.dataDetail.find(dataItem => dataItem.priceType === "C"),
                            lastTrade: lwinDetail.dataDetail.find(dataItem => dataItem.priceType === "F"),
                        };

                    } else {
                        return product;
                    }
                });
               
                setProducts(combinedData);
            }
        };

        fetchPriceData(0);
    }


    function splitArrayIntoBatches(arr, batchSize) {
        const batches = [];
        for (let i = 0; i < arr.length; i += batchSize) {
            batches.push(arr.slice(i, i + batchSize));
        }
        return batches;
    }


    useEffect(() => {
       loadProducts();
    }, [])
    return (
        <>
            <Header></Header>

            {!productDetailPage ?
                <Grid>
                    <Grid container className={classes.pageHeader} style={{ backgroundImage: 'url(' + AboutSecBg + ')' }}>
                        <Grid row>
                            <Grid container alignItems={'center'}>
                                <h1>Buy</h1>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid container className={classes.container}>
                        <h1>Products</h1>
                    </Grid>
                    <Grid container className={classes.container}>
                        <Grid item md={12} lg={12} sm={12} style={{ textAlign: 'right' }}>
                            <TextField
                                label="Search"
                                variant="outlined"
                                value={searchText}
                                onChange={(e) => setSearchText(e.target.value)}
                            />
                        </Grid>
                    </Grid>

                    <Grid container className={classes.container}>
                        <Grid item md={12} lg={12} sm={12}>
                            <div>

                                <TableContainer component={Paper}>
                                    <Table>
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Color</TableCell>
                                                <TableCell>Best Sell</TableCell>
                                                <TableCell>Best Buy</TableCell>
                                                <TableCell>Last Trade</TableCell>
                                                <TableCell>Save</TableCell>
                                                <TableCell>Actions</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {products.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product, index) => (
                                                <TableRow key={index}>
                                                    <TableCell>{product.wine}</TableCell>
                                                    <TableCell>{product.color}</TableCell>
                                                    <TableCell>{product.bestSell}</TableCell>
                                                    <TableCell>{product.bestBuy}</TableCell>
                                                    <TableCell>{product.lastTrade}</TableCell>
                                                    <TableCell>{product.save ? "Yes" : "No"}</TableCell>
                                                    <TableCell>
                                                        <Button variant="outlined" className={classes.buyBtn} onClick={() => handleBuy(product)}>Buy</Button>
                                                        <Button variant="outlined" className={classes.sellBtn} onClick={() => handleSell(product)}>Sell</Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>

                                <TablePagination
                                    component="div"
                                    count={data.length}
                                    page={page}
                                    onPageChange={handleChangePage}
                                    rowsPerPage={rowsPerPage}
                                    onRowsPerPageChange={handleChangeRowsPerPage}
                                    rowsPerPageOptions={rowsPerPageOptions}
                                >
                                </TablePagination>
                            </div>

                        </Grid>

                    </Grid>
                </Grid>
                :
                <Grid>
                    <ProductDetails product={productInfo}></ProductDetails>
                </Grid>
            }




            <Footer></Footer>

        </>
    )
}
export default Marketplace;
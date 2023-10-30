import React, { useState, useEffect } from "react";
import { Grid, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TextField, Button, Typography } from '@mui/material';
import useStyles from "./styles";
import { Done } from '@mui/icons-material';
import drinkImage from "../../../images/drinkCanImg.svg";
import DetailChart from "./charts/DetailChart";
function ProductDetails(product, ...props) {
    const classes = useStyles();
    const productData = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 30 },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 25 },
    ]

    const [bidOffer, setBidOffer] = useState();

    const getApiData = () => {
        const baseUrl = "https://sandbox-api.liv-ex.com/";
        const bidOfferUrl = "exchange/v1/bidOffer";

        var headerParams = {
            'client_key': 'bbe4300c-53c1-4e09-86e9-edbf9d30c178',
            'client_secret': 'MXcIEoDY',
            'accept': 'application/json',
            'content-type': 'application/json'
        };         

        var bidOfferParams = {
            
            bidOffer: {
            includeBid: false,
            includeOffer: true,
            currency: "usd",
            contractType: ["sib","x", "sep"],
            includeMarketPrice: true,
            includeLastTrade: true,
            }
                
        }

        fetch(baseUrl + bidOfferUrl, {
            method: 'POST',
            headers: headerParams,
            body: JSON.stringify(bidOfferParams)
        })
        .then((response) => {
          return response.text();
        })
        .then((data) => {
           debugger;
           var parsedData = JSON.parse(data);
           var item = parsedData.bidOfferResponse.find(x => x.lwin == product.product.lwin11.toString());

           if(!isNaN(item))
           {
            setBidOffer(item.market[0].depth.offers.offer);
           }
          
        })
    }

   
    useEffect(() => {
        getApiData(); 
    }, [])
    return (
        <>

            <Grid className={classes.container} container justifyContent={"center"}>
                <Grid item md={2} lg={2} sm={2}>
                    <div className={classes.stepBox}>
                        <Done />
                        <h3>Product Details</h3>
                    </div>

                </Grid>
                <Grid item md={2} lg={2} sm={2}>
                    <div className={classes.stepBox}>
                        <Done />
                        <h3>Payment Details</h3>
                    </div>

                </Grid>
                <Grid item md={2} lg={2} sm={2}>

                    <div className={classes.stepBox}>
                        <Done />
                        <h3>Order Confirmation</h3>
                    </div>

                </Grid>
            </Grid>


            <Grid container className={classes.container}>
                <h1>Product Details</h1>
            </Grid>

            <Grid container className={classes.container}>
                <Grid item sm={6} md={6} lg={6}>
                    <div className={classes.whiteBox}>
                         <DetailChart />
                    </div>
                </Grid>
                <Grid item sm={6} md={6} lg={6}>
                    <div className={classes.whiteBox}>
                        <img style={{ width: '190px', margin: 'auto' }} src={drinkImage} />
                    </div>
                </Grid>

                <Grid item sm={6} md={6} lg={6}>
                    <div className={classes.whiteBox}>
                        <h3  className="alignLeft">Adrianna Mundus Bacillus Terrae</h3>
                        <TableContainer component={Paper}>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Color </TableCell>
                                        <TableCell>Best Sell</TableCell>
                                        <TableCell>Best Buy</TableCell>
                                        <TableCell>Last Trade</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {productData.map((row) => (
                                        <TableRow key={row.id}>
                                            <TableCell>{row.id}</TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row.email}</TableCell>
                                            <TableCell>{row.age}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </div>
                </Grid>
                <Grid item sm={6} md={6} lg={6}>
                    <div className={classes.whiteBox}>
                        <h3 className="alignLeft">2016 Bodega Catena Zapata Adrianna Mundus Bacillus Terrae</h3>
                        <h4 className="alignLeft">Best offers on the market</h4>

                        <TableContainer component={Paper}>
                            <Table>
                                <TableBody>
                                {bidOffer ? bidOffer.map((offer, index) => (
                                      <TableRow key={index}>
                                          <TableCell>Cases: 01</TableCell>
                                          <TableCell style={{ textAlign: 'right' }}>
                                              Price per Case: {offer.price}
                                          </TableCell>
                                      </TableRow>
                                 )) : <Typography component="p">No offers on this product</Typography>}       
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </Grid>
            </Grid>




        </>
    )
}

export default ProductDetails;
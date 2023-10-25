import React, { useState, useEffect } from "react";
import { Grid, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TextField, Button } from '@mui/material';
import useStyles from "./styles";
import ProfilePic from "../../images/common/profile.jpg";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ReplyIcon from '@mui/icons-material/Reply';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import LocalSeeIcon from '@mui/icons-material/LocalSee';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SendIcon from '@mui/icons-material/Send';
import AboutSecBg from "../../images/common/aboutSecBg.png";

function Marketplace() {
    const classes = useStyles();
    const navigate = useNavigate();

    const handleBuy = () => {
        debugger
    }
    const handleSell = () => {
        debugger
    }

    const [searchText, setSearchText] = useState('');

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


    useEffect(() => {

    }, [])
    return (
        <>
            <Header></Header>

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
                <Grid item md={12} lg={12} sm={12} style={{textAlign: 'right'}}>
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
                                    {filteredProducts.map((product, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{product.name}</TableCell>
                                            <TableCell>{product.color}</TableCell>
                                            <TableCell>{product.bestSell}</TableCell>
                                            <TableCell>{product.bestBuy}</TableCell>
                                            <TableCell>{product.lastTrade}</TableCell>
                                            <TableCell>{product.save ? "Yes" : "No"}</TableCell>
                                            <TableCell>
                                                <Button variant="outlined" color="primary" onClick={() => handleBuy(product)}>Buy</Button>
                                                <Button variant="outlined" color="secondary" onClick={() => handleSell(product)}>Sell</Button>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                </Grid>

            </Grid>





            <Footer></Footer>

        </>
    )
}
export default Marketplace;
import React, { useState, useEffect } from "react";
import { Grid, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TextField, Button } from '@mui/material';
import useStyles from "./styles";
import { Done } from '@mui/icons-material';
import drinkImage from "../../../images/drinkCanImg.svg";
function ProductDetails() {
    const classes = useStyles();
    const productData = [
        { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 30 },
        { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 25 },
    ]
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
                        sfsdf
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
                                        <TableRow>
                                            <TableCell>Cases: 01 </TableCell>
                                            <TableCell>Price per Case $12,000</TableCell>
                                        </TableRow>
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
import React, { useState, useEffect } from "react";
import { Grid, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Paper, TextField, Button } from '@mui/material';
import useStyles from "./styles";
import { Done } from '@mui/icons-material';
function ProductDetails() {
    const classes = useStyles();
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





        </>
    )
}

export default ProductDetails;
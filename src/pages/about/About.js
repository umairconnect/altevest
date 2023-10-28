import React from "react";
import { Grid, Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import useStyles from "./styles";
import { Link, useNavigate } from 'react-router-dom';
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function About() {
    const classes = useStyles();
    const navigate = useNavigate();

    const getStart = () => {
        navigate('/getStarted');
    }
    return (
        <>
            <Header></Header>

            <Grid container className={classes.pageHeader}>
                <h1>About</h1>

            </Grid>

            <Grid container justifyContent="center" className={classes.commonContent}>
                <Grid lg={8} md={8} sm={8}>
                    <h2>Who we are</h2>
                    <p>
                    Cellar is an online platform providing its users with limited opportunities, allowing the purchase of physical assets that can be viewed as both a commodity and an investment if stored and not consumed. We focus on sourcing unique products across different categories for our users. 
                    </p>

                    <h2>Our Mission</h2>
                    <p>
                    Our mission is to provide accessibility and flawless purchase process of limited categories of products that were previously reserved for a niche group of  Aristocrats and Ultra-Wealthy individuals to enjoy.                    </p>

                    <h2>Our Values</h2>
                    <p>
                        <b> Security: </b> The security of our users’ assets is our top priority. We ensure the end owner of any product is able to obtain their assets at their will. 

                    </p>
                    <p>
                        <b> Transparency:  </b>
                        We are very open on all stages of the process from sourcing to purchasing and to selling. We ensure the user gets the best and flawless experience with us. 

                    </p>
                    <p>
                        <b> Accessibility:   </b>
                        The key to our business is accessibility as we aim to provide the best in class service to users all around the world.

                    </p>

                    <p>
                        <b> Authenticity:    </b>
                        We work rigorously with our vendors and counterparts to ensure the products we offer on our platform are best-in-class investable assets that have been checked and approved for authenticity.

                    </p>

                    <p>
                        <b> Our Purpose:  </b>
                        We strongly believe everyone should have equal opportunities to preserve and grow their wealth. We aim to bridge the gap between the highly sought-after yet hardly accessible assets and people looking to diversify and benefit from stable returns.

                    </p>
                </Grid>
            </Grid>


            <Footer></Footer>

        </>
    )
}
export default About;
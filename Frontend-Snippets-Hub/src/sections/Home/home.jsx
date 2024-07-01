import React from 'react';
import {Box, Card, Grid} from "@mui/material";
import Password from "../password/password.jsx";
import ProgressBar from "../progress-bar/progress.jsx";
import Pagination from "../pagination/pagination.jsx";
import Tabs from "../tabs/tabs.jsx";
import Accordion from "../Accordion/accordion.jsx";
import StarRating from "../StarRating/rating.jsx";
import OTP from "../OTP/otp.jsx";
import Tree from "../TreeFolder/tree.jsx";
import ProductFilter from "../ProductFilter/product-filter.jsx";
import Transfer from "../TransferList/transfer.jsx";

function HomeSection() {

    return (
        <>
            {/*<Front/>*/}
        <Card sx={{backgroundColor:"orange"}}>

            <Grid container spacing={6} sx={{p:5}}>

                <Grid item xs={12} md={6} spacing={2}>
                    <Password/>
                </Grid>

                <Grid item xs={12} md={6} spacing={2}>
                    <ProgressBar/>
                </Grid>


                <Grid item xs={12} md={6} spacing={2}>
                    <Pagination/>
                </Grid>

                <Grid item xs={12} md={6} spacing={2}>
                    <Tabs/>
                </Grid>

                <Grid item xs={12} md={6} spacing={2}>
                    <Accordion/>
                </Grid>

                <Grid item xs={12} md={6} spacing={2}>
                    <StarRating/>
                </Grid>


                <Grid item xs={12} md={6} spacing={2}>
                    <OTP/>
                </Grid>

                <Grid item xs={12} md={6} spacing={2}>
                    <Tree/>
                </Grid>

                <Grid item xs={12} md={6} spacing={2}>
                    <ProductFilter/>
                </Grid>

                <Grid item xs={12} md={6} spacing={2}>
                    <Transfer/>
                </Grid>

            </Grid>
        </Card>
        </>);
}

export default HomeSection;
import React from 'react';
import {Card, Grid} from "@mui/material";
import Password from "../password/password.jsx";
import ProgressBar from "../progress-bar/progress.jsx";
import Pagination from "../pagination/pagination.jsx";

function HomeSection() {
    return (<Card>
            <Grid container spacing={4} sx={{p:3}}>

                <Grid item xs={12} md={4} spacing={2}>
                    <Password/>
                </Grid>

                <Grid item xs={12} md={4} spacing={2}>
                    <ProgressBar/>
                </Grid>


                <Grid item xs={12} md={4} spacing={2}>
                    <Pagination/>
                </Grid>


            </Grid>
        </Card>);
}

export default HomeSection;
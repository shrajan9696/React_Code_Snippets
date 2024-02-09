import React from 'react';
import {Card, Grid} from "@mui/material";
import Password from "../password/password.jsx";

function HomeSection() {
    return (<Card>
            <Grid container spacing={3} sx={{p:3}}>

                <Grid item xs={12} md={4} spacing={2}>
                    <Password/>
                </Grid>

                <Grid item xs={12} md={4} spacing={2}>
                    <Password/>
                </Grid>

                <Grid item xs={12} md={4} spacing={2}>
                    <Password/>
                </Grid>

            </Grid>
        </Card>);
}

export default HomeSection;
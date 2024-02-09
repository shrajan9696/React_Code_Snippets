import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import password from '../../assets/password.png';
function Password() {
    return (
        <Card>
            <CardMedia
                sx={{ height: 180 }}
                image={password}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Password Input
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    A React password Component to show hide-in and hide-out functionality from scratch.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Code and Working</Button>
            </CardActions>
        </Card>
    );
}

export default Password;
import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
function CardComponent(props) {
    const navigate = useNavigate()
    return (
        <Card>
            <CardMedia
                sx={{ height: 180}}
                image={props.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" onClick={()=>navigate(props.link)}>Code and Working</Button>
            </CardActions>
        </Card>
    );
}

export default CardComponent;
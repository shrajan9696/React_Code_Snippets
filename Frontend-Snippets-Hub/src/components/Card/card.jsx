import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

function CardComponent(props) {
    const navigate = useNavigate()
    return (<Card sx={{backgroundColor: "#ffebcc"}}
                  component={motion.div}
                  whileHover={{
                      scale:1.1,
                      originX:0,
                      boxShadow:"3px 5px 23px 13px rgba(235,42,42,1)",
                      backgroundColor:"#e89494",

                  }}
                 >
            <CardMedia
                sx={{height: 180}}
                image={props.image}
                title="green iguana"
            />
            <CardContent
                component={motion.div}
                whileHover={{
                    scale:1.2,
                    originX:0
                }}
            >
                <Typography gutterBottom variant="h4" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="medium" color="secondary" variant="contained" onClick={() => navigate(props.link)}
                        component={motion.div}
                        whileHover={{
                            scale:1.5,
                            originX:0,
                            transition:{
                                repeat: Infinity,
                                duration: 1
                            }
                        }}
                >
                    Code and Working
                </Button>
            </CardActions>
        </Card>);
}

export default CardComponent;
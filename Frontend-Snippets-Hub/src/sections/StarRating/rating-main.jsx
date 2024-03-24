import React, {useState} from 'react';
import classes from "./rating.module.css";
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import {Card, CardContent, CardHeader, Grid, Stack} from "@mui/material";
import codeString from "./code.js";
import SyntaxHighlighter from "react-syntax-highlighter";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/hljs/index.js";

function RatingMain(props) {

    const [clickCount, setClickCount] = useState(0);
    const [hoverCount, setHoverCount] = useState(0);

    const clickHandler = (element) => {
        setClickCount(element);
    }

    const hoverHandler = (element) => {
        setHoverCount(element);
    }

    return (
        <Stack spacing={3} sx={{p: 4}}>
            <Card>
                <CardHeader title="solution"/>
                <CardContent>
                    <div className={classes.main}>
                        <div className={classes.star}>
                            {[1, 2, 3, 4, 5].map((ele, index) => {
                                return (<>
                                    <StarOutlineOutlinedIcon fontSize="large"
                                                             onClick={() => clickHandler(ele)}
                                                             onMouseOver={() => hoverHandler(ele)}
                                                             onMouseLeave={() => hoverHandler(clickCount)}
                                                             sx={ele<=(hoverCount||clickCount)?{fill: '#ffdd00'}:""}
                                    />
                                </>)
                            })}
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader title="Code"/>
                <CardContent>
                    <Grid justifyContent="center">
                        <Grid item xs={12}>
                            <SyntaxHighlighter language="javascript" style={a11yDark}>
                                {codeString}
                            </SyntaxHighlighter>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>

        </Stack>);
}

export default RatingMain;
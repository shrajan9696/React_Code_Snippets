import React, {useEffect, useRef, useState} from 'react';
import classes from "./otp.module.css";
import {Card, CardContent, CardHeader, Grid, Stack} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/hljs/index.js";
import codeString from "./code.js";
function OTPMain(props) {

    const arr = ["", "", "", ""];

    const refArr = [useRef(), useRef(), useRef(), useRef()];

    const [initialValues, setInitialValues] = useState(arr);

    const [empty, setEmpty] = useState([true, true, true, true]);

    useEffect(() => {
        refArr[0].current.focus();
    }, []);

    const submitHandler = () => {
        const arr_x = initialValues.map((ele, i) => ele !== "");
        setEmpty(arr_x)
    }

    const changeHandler = (e, i) => {
        const copyValue = [...initialValues];
        copyValue[i] = e.target.value;
        setInitialValues(copyValue);

        if (e.target.value === "") return;
        if (i !== 3) refArr[i + 1].current.focus();

    }

    const handleKeyDown = (event, i) => {
        if (event.keyCode === 8) {
            console.log("came");
            refArr[i].current.focus();
        }
    }

    return (<Stack spacing={3} sx={{p: 4}}>
        <Card>
            <CardHeader title="solution"/>
            <CardContent>
                <div className={classes.main}>
                    <div className={classes.inp}>
                        {arr.map((ele, index) => {
                            return (<input
                                    value={initialValues[index]}
                                    ref={refArr[index]}
                                    onChange={(e) => changeHandler(e, index)}
                                    maxLength={1}
                                    onKeyDown={(e) => handleKeyDown(e, index)}
                                    className={ `${empty[index] === false ? classes.miss : null} ${classes.otp} `}
                                />

                            );
                        })}
                    </div>
                    <button onClick={submitHandler} className={classes.subbutt}>Submit</button>
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

export default OTPMain;
import React from 'react';
import classes from "./Front.module.css";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
function Front(props) {
    return (
        <div className={classes.outDiv}>
            {/*<img className={classes.banner} src={"https://images.pexels.com/photos/255379/pexels-photo-255379.jpegclasses?cs=srgb&dl=pexels-miguel-%C3%A1-padri%C3%B1%C3%A1n-255379.jpg&fm=jpg"} alt={""} />*/}
            <div className={classes.banner}>

            </div>
            <div className={classes.header}>
                <h1>React-Snippets</h1>
                <p>A react components for interview preperation</p>
                <FormControl sx={{width: "50%"}}>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Age"

                    >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export default Front;
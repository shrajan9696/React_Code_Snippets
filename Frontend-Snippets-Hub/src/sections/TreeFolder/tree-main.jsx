import React from 'react';
import folderData from "./data.js";
import {Card, CardContent, CardHeader, Grid, Stack, Typography} from "@mui/material";
import FolderComponent from "./folder-component.jsx";
import SyntaxHighlighter from "react-syntax-highlighter";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/hljs/index.js";
import codeString from "./code.js";


function TreeMain() {
    return (
        <Stack spacing={3} sx={{p: 4}}>

            <Card>
                <CardHeader title="Problem Statement"/>
                <CardContent>
                    <Typography variant="body1" component="div">
                       Create a Folder Structure Component like VS Code which should expand and collapse as well.
                    </Typography>
                </CardContent>
            </Card>

            <Card>
                <CardHeader title="solution"/>
                <CardContent>
                    <FolderComponent files={folderData}/>
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
        </Stack>

    );
}

export default TreeMain;
import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Card, CardContent, CardHeader, Grid, Paper, Stack, Typography} from "@mui/material";
function PasswordMain(props) {

    const codeString = "import React from 'react';\n" +
        "import {Button, Card, CardActions, CardContent, CardMedia, Typography} from \"@mui/material\";\n" +
        "import {useNavigate} from \"react-router-dom\";\n" +
        "function CardComponent(props) {\n" +
        "    const navigate = useNavigate()\n" +
        "    return (\n" +
        "        <Card>\n" +
        "            <CardMedia\n" +
        "                sx={{ height: 180 }}\n" +
        "                image={props.image}\n" +
        "                title=\"green iguana\"\n" +
        "            />\n" +
        "            <CardContent>\n" +
        "                <Typography gutterBottom variant=\"h5\" component=\"div\">\n" +
        "                    {props.title}\n" +
        "                </Typography>\n" +
        "                <Typography variant=\"body2\" color=\"text.secondary\">\n" +
        "                    {props.content}\n" +
        "                </Typography>\n" +
        "            </CardContent>\n" +
        "            <CardActions>\n" +
        "                <Button size=\"small\" onClick={()=>navigate(props.link)}>Code and Working</Button>\n" +
        "            </CardActions>\n" +
        "        </Card>\n" +
        "    );\n" +
        "}\n" +
        "\n" +
        "export default CardComponent;";



    return (
        <Stack spacing={3} sx={{p :4}}>
            <Card>
                <CardHeader title="Problem Statement" />
                <CardContent>
            <Typography variant="body1" component="div">
                Create a password text field with two toggle icons to show and hide the password.
            </Typography>
                </CardContent>
            </Card>

            <Card>
                <CardHeader title="Solution" />
                <CardContent>

                </CardContent>
            </Card>

            <Card>
                <CardHeader title="Code" />
                <CardContent>
            <Grid  justifyContent="center">
                <Grid item xs={12} >
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

export default PasswordMain;
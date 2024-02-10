import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import {a11yDark} from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {twilight} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {Card, CardContent, CardHeader, Grid, Paper, Stack, Typography} from "@mui/material";
import {Icon} from '@iconify/react';

function PasswordMain(props) {

    const [isPassword, setIsPassword] = React.useState(false);
    const codeString = `
const [isPassword,setIsPassword] = React.useState(false);
<input type={isPassword ? "password" : "text"} />
 <Icon
    icon={isPassword ? "bi:eye-slash" : "bi:eye"} onClick={()=>setIsPassword(!password)}
    style={{position: "relative",right:"20px",top:"5px"}}
 />
       
`;


    return (<Stack spacing={3} sx={{p: 4}}>
            <Card>
                <CardHeader title="Problem Statement"/>
                <CardContent>
                    <Typography variant="body1" component="div">
                        Create a password input field with two toggle icons to show and hide the password.
                    </Typography>
                </CardContent>
            </Card>

            <Card>
                <CardHeader title="Solution"/>
                <CardContent>
                    <input type={isPassword ? "password" : "text"} style={{width:"80%", height:"30px", border:"2px solid black", borderRadius:"10px"}}/>
                    <Icon
                        icon={isPassword ? "bi:eye-slash" : "bi:eye"} onClick={() => setIsPassword(!isPassword)}
                        style={{position: "relative", right: "20px", top: "5px"}}
                    />

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

            <Card>
                <CardHeader title="Brief Explanation"/>
                <CardContent>
                    <Typography variant="body1" component="div">
                        It is implemented using html input tag and react useState hook. The useState hook is used to keep track weather the
                        password is visible or not. The input tag is used to create the password field and the Icon tag is used to create the icon.
                        upon clicking the icon the password is toggled between visible and hidden. using react useState hook the state of the password is changed.
                    </Typography>
                </CardContent>
            </Card>

        </Stack>

    );
}

export default PasswordMain;
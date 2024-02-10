import React from 'react';
import {Card, CardContent, CardHeader, Grid, Stack, Typography} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/hljs/index.js";

function ProgressMain() {
    const [progress, setProgress] = React.useState(90);
    const changePercentage = (percentage) => () => {
        setProgress(percentage);
    }

    const codeString = `

    const [progress, setProgress] = React.useState(90);
    const changePercentage = (percentage) => () => {
        setProgress(percentage);
    }
    
    <div style={{position:"relative", height:"30px",width:"90%",borderRadius:"10px",border:"2px solid black",overflow:"hidden"}}>
             <div style={{position:"absolute", width:"100%", height:"100%", left:"${progress-100}%", backgroundColor:"green"}}/>
    </div>
    
             <div style={{display:"flex",justifyContent:"space-between",marginTop:"10px", width:"90%"}}>
                       <button onClick={changePercentage(0)}>0%</button>
                       <button onClick={changePercentage(25)}>25%</button>
                       <button onClick={changePercentage(50)}>50%</button>
                       <button onClick={changePercentage(75)}>75%</button>
                       <button onClick={changePercentage(100)}>100%</button>
              </div>
              
              <div style={{marginTop:"10px"}}>
                        <Typography variant="body1" component="div">
                            click on these buttons to change the percentage of the progress bar.
                        </Typography>
              </div>
    
    `
    return (
        <Stack spacing={3} sx={{p: 4}}>
            <Card>
                <CardHeader title="Problem Statement"/>
                <CardContent>
                    <Typography variant="body1" component="div">
                        Create a progress bar with various percentage values. The progress bar should be able to change its percentage value upon clicking the buttons.
                    </Typography>
                </CardContent>
            </Card>
            <Card>
                <CardHeader title="Solution"/>
                <CardContent>
                 <div
                     style={{position:"relative", height:"30px",width:"90%",borderRadius:"10px",border:"2px solid black",overflow:"hidden"}}
                 >
                     <div
                     style={{position:"absolute", width:"100%", height:"100%", left:`${progress-100}%`, backgroundColor:"green"}}
                     />
                 </div>
                   <div style={{display:"flex",justifyContent:"space-between",marginTop:"10px", width:"90%"}}>
                       <button onClick={changePercentage(0)}>0%</button>
                       <button onClick={changePercentage(25)}>25%</button>
                       <button onClick={changePercentage(50)}>50%</button>
                       <button onClick={changePercentage(75)}>75%</button>
                       <button onClick={changePercentage(100)}>100%</button>
                   </div>
                    <div style={{marginTop:"10px"}}>
                        <Typography variant="body1" component="div">
                            click on these buttons to change the percentage of the progress bar.
                        </Typography>
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

            <Card>
                <CardHeader title="Brief Explanation"/>
                <CardContent>
                    <Typography variant="body1" component="div">
                        It is implemented through using useState hook to store the percentage value of the progress bar. The changePercentage function is used to change the percentage value of the progress bar. The buttons are used to call the changePercentage function with different percentage values.
                        I have used <span style={{fontWeight:"bold"}}>left:(progress-100)%</span> to change the position of the progress bar.
                    </Typography>
                </CardContent>
            </Card>


        </Stack>

    );
}

export default ProgressMain;
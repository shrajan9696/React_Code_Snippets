import React, {useState} from 'react';
import "./tab.css";
import {Card, CardContent, CardHeader, Grid, Stack} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/hljs/index.js";

function TabsMain(props) {

    const [active, setActive] = useState(1);

    const setActiveHandler = (num) => {
        setActive(num)
    }

    let codeString = `
    const [active, setActive] = useState(1);
    
    const setActiveHandler = (num) => {
        setActive(num)
    }
    
    <div className="main">
                    <div className="tab">
                        <div className={\`tab-item ${active === 1 && "active-tab"}\`}
                             onClick={() => setActiveHandler(1)}>Tab 1
                        </div>
                        <div className={\`tab-item ${active === 2 && "active-tab"}\`}
                             onClick={() => setActiveHandler(2)}>Tab 2
                        </div>
                        <div className={\`tab-item ${active === 3 && "active-tab"}\`}
                             onClick={() => setActiveHandler(3)}>Tab 3
                        </div>
                    </div>
                      <div className="content">
                        {active === 1 && <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries
                        </p>}

                        {active === 2 && <p>
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English.
                        </p>}

                        {active === 3 && <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur
                        </p>}
                    </div>
                </div>
`

    return (
        <Stack spacing={3} sx={{p: 4}}>
            <Card>

            </Card>

        <Card>
            <CardHeader title="solution"/>
            <CardContent>
                <div className="main">
                    <div className="tab">
                        <div className={`tab-item ${active === 1 && "active-tab"}`}
                             onClick={() => setActiveHandler(1)}>Tab 1
                        </div>
                        <div className={`tab-item ${active === 2 && "active-tab"}`}
                             onClick={() => setActiveHandler(2)}>Tab 2
                        </div>
                        <div className={`tab-item ${active === 3 && "active-tab"}`}
                             onClick={() => setActiveHandler(3)}>Tab 3
                        </div>
                    </div>
                      <div className="content">
                        {active === 1 && <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                            been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                            galley of type and scrambled it to make a type specimen book. It has survived not only five
                            centuries
                        </p>}

                        {active === 2 && <p >
                            It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it look like readable English.
                        </p>}

                        {active === 3 && <p>
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece
                            of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock,
                            a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure
                            Latin words, consectetur.
                        </p>}
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
        </Stack>

    );
}

export default TabsMain;
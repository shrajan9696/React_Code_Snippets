import React, {useEffect, useState} from 'react';
import {Box, Card, CardContent, CardHeader, Grid, Stack, Typography} from "@mui/material";
import SyntaxHighlighter from "react-syntax-highlighter";
import {a11yDark} from "react-syntax-highlighter/dist/cjs/styles/hljs/index.js";


function PaginationMain(props) {
    const [postData, setPostData] = useState([]);

    const [isLoading, setLoading] = useState(true);

    const [currPage, setCurrPage] = useState(1);



    async function fetchData(page) {
        setLoading(true);
        setCurrPage(page)
        const skip = (currPage - 1) * 10;
        const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${skip}&select=title,description`);
        const data = await res.json();
        setLoading(false)
        console.log(data);
        setPostData(data.products);
    }

    const prevPage = ()=>{
        if(currPage!==1){
            setCurrPage(curr=>curr-1);
        }
    }

    const nextPage = ()=>{
        if(currPage!==10){
            setCurrPage(curr=>curr+1);
        }
    }

    useEffect(() => {
        fetchData(currPage);
    }, [currPage]);


    const codeString = `
     const [postData, setPostData] = useState([]);

     const [isLoading, setLoading] = useState(true);
     
     async function fetchData(page){
        const skip = (page-1)*10;
        setLoading(true)
        const res = await fetch(\`https://dummyjson.com/products?limit=10&skip={skip}&select=title,description\`);
        const data = await res.json();
        setLoading(false)
        console.log(data);
        setPostData(data.products);
    }
    
    useEffect(() => {
        fetchData(1);
    }, []);
     
     {isLoading && <h3>...loading</h3>}
     
     {!isLoading &&  {postData.map(ele=>{
                           return (<Grid item xs={12} md={4}>
                               <Card sx={{padding:"10px"}}>
                             <h4>{ele.title}</h4>
                               <p>{ele.description}</p>
                               </Card>
                           </Grid>)
                       })}}
        
                  
                    <Box sx={{display:"flex",justifyContent:"center"}}>
                        {[1,2,3,4,5,6,7,8,9,10].map(ele=><span style={{padding:"5px",border:"2px solid gray", cursor:"pointer"}}  onClick={()=>fetchData(ele)}>{ele}</span>)}
                    </Box>
    
    `

    return (<Stack spacing={3} sx={{p: 4}}>

        <Card>
            <CardHeader title="Problem Statement"/>
            <CardContent>
                <Typography variant="body1" component="div">
                    Fetch details of 100 posts from an api, show 10 posts on a page and pagination component, having
                    10 buttons when user click on the specific page show details of that page. there should also be previous and
                    next buttons for faster navigation simply create the functionality of pagination.
                </Typography>
            </CardContent>
        </Card>


        <Card>
            <CardHeader title="Solution"/>
            <CardContent>
                {isLoading && <h3>...loading</h3>}
                {!isLoading && <Grid container spacing={1}>
                    {postData.map(ele => {
                        return (<Grid item xs={12} md={3}>
                            <h4>{ele.title}</h4>
                            <p>{ele.description}</p>

                        </Grid>)
                    })}
                </Grid>}

                <Box sx={{display: "flex", justifyContent: "center"}}>
                    <span onClick={prevPage} style={{cursor:"pointer", border: "2px solid gray"}}>prev</span>
                    {[1, 2, 3,4,5,6,7,8,9,10].map(ele => <span
                        style={{padding: "5px", border: "2px solid gray", cursor: "pointer",backgroundColor:ele===currPage?"gray":"white"}}
                        onClick={() => fetchData(ele)}>{ele}</span>)}
                    <span onClick={nextPage} style={{cursor:"pointer",border: "2px solid gray"}}>next</span>
                </Box>
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
                   There is a function fetchData which is fetching data from api and storing it in variable postData, then there are buttons upon
                    clicking them I am calling fetchData function with appropriate page number and I have used grid mui to show the details of 10
                    posts on the page. I have also created a loader till the time content is loading from api. I have created variable naming currPage
                    and whenever that changes I call the api and the two functions nextPage and previous Page controls the functionality of previous and
                    next buttons.
                </Typography>
            </CardContent>
        </Card>

    </Stack>);
}

export default PaginationMain;
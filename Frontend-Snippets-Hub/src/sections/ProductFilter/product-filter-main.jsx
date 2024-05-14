import React, {useEffect, useState} from 'react';
import {items} from "./item.js";
import classes from "./product.module.css";
import {Card, CardContent, CardHeader, Stack} from "@mui/material";

function ProductFilterMain(props) {
    const filters = ["Bags","Watches","Sports","Sunglasses"];
    const [filteredData, setFilteredData] = useState(items);
    const [activeFilters, setActiveFilters] = useState([]);

    const filterProducts = ()=>{
        if(activeFilters.length){
            const updatedItems = items.filter((ele)=>activeFilters.includes(ele.category));
            setFilteredData(updatedItems);
        }
        else{
            setFilteredData(items);
        }
    }

    useEffect(() => {
        filterProducts();
    }, [activeFilters]);

    const handleClick = (e)=>{
        const category = e.target.value;
        if(activeFilters.includes(category)){
            const updatedFilters = activeFilters.filter(ele=>ele!==category);
            setActiveFilters(updatedFilters);
        }
        else{
            setActiveFilters([...activeFilters,category])
        }

    }
    console.log(activeFilters);

    return (
        <Stack spacing={3} sx={{p: 4}}>
            <Card>
                <CardHeader title="solution"/>
                <CardContent>
        <div>
            <div className={classes.filterbuttonsdiv}>
            {filters.map((ele)=>(

                <button value={ele} onClick={handleClick} className={`${classes.filterButtons} ${activeFilters.includes(ele)?classes.productSelected:null}`}>{ele}</button>

            ))}
            </div>
            <div className={classes.productList}>
            {filteredData.map((ele)=>(
                <div className={classes.productCard}>
                  <h3>{ele.name}</h3>
                    <p>{ele.category}</p>
                </div>
                ))}
            </div>
        </div>
                </CardContent>
            </Card>
        </Stack>
    );
}

export default ProductFilterMain;
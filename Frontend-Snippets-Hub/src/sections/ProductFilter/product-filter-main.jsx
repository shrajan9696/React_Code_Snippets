import React, {useEffect, useState} from 'react';
import {items} from "./item.js";

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
        <div>
            {filters.map((ele)=>(
                <button value={ele} onClick={handleClick}>{ele}</button>
            ))}
            {filteredData.map((ele)=>(
                <div>
                  <h3>{ele.name}</h3>
                    <p>{ele.category}</p>
                </div>
                ))}
        </div>
    );
}

export default ProductFilterMain;
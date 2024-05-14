import React from 'react';
import CardComponent from "../../components/Card/card.jsx";
import productFilter from "../../assets/productFilter.jpeg"
function ProductFilter() {
    return (
        <CardComponent title="Product Filter List" image={productFilter} content="this is password Card" link="/productfilter"/>
    );
}

export default ProductFilter;
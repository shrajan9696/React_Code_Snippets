import React from 'react';
import CardComponent from "../../components/Card/card.jsx";
import pass from "../../assets/password.png"
function ProductFilter() {
    return (
        <CardComponent title="Product Filter List" image={pass} content="this is password Card" link="/productfilter"/>
    );
}

export default ProductFilter;
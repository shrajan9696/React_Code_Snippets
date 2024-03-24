import React from 'react';
import CardComponent from "../../components/Card/card.jsx";
import star from "../../assets/star.png"
function StarRating() {
    return (
        <CardComponent title="Star Rating" image={star} content="this is Star Rating Component" link="/rating"/>
    );
}

export default StarRating;
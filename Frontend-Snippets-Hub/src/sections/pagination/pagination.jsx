import React from 'react';
import CardComponent from "../../components/Card/card.jsx";
import pagination from "../../assets/pagination.png"
function Pagination() {
    return (
        <CardComponent title="Pagination" image={pagination} content="this is pagination Card" link="/pagination"/>
    );
}

export default Pagination;
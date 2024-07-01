import React from 'react';
import CardComponent from "../../components/Card/card.jsx";
import tabs from "../../assets/tabs.png";
function Transfer() {
    return (
        <CardComponent title="Transfer List Component" image={tabs} content="this is Transfer List Component" link="/transfer"/>
    );
}

export default Transfer;
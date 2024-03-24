import React from 'react';
import CardComponent from "../../components/Card/card.jsx";
import tabs from "../../assets/tabs.png";
function Tabs() {
    return (
        <CardComponent title="Tabs Component" image={tabs} content="this is Tab Component" link="/tab"/>
    );
}

export default Tabs;
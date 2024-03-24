import React from 'react';
import CardComponent from "../../components/Card/card.jsx";
import FAQ from "../../assets/FAQ.png"
function Accordion() {
    return (
        <CardComponent title="Accordion (FAQ's)" image={FAQ} content="this is Accordion Card" link="/accordion"/>
    );
}

export default Accordion;
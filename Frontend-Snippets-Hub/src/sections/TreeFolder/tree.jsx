import React from 'react';
import CardComponent from "../../components/Card/card.jsx";
import folder from "../../assets/folder.png"
function Tree() {
    return (
        <CardComponent title="Tree Folder Structure" image={folder} content="this is Tab Component" link="/tree"/>
    );
}

export default Tree;
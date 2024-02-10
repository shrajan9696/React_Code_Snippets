import React from 'react';
import CardComponent from "../../components/Card/card.jsx";
import pass from "../../assets/password.png"
function Password() {
    return (
        <CardComponent title="Password" image={pass} content="this is password Card" link="/password"/>
    );
}

export default Password;
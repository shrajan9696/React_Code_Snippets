import React from 'react';
import CardComponent from "../../components/Card/card.jsx";
import otp from "../../assets/otp.png"
function OTP() {
    return (
        <CardComponent title="OTP Input" image={otp} content="this is otp component" link="/otp"/>
    );
}

export default OTP;
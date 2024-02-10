import React from 'react';
import CardComponent from "../../components/Card/card.jsx";
import progress from "../../assets/progress.png"
function ProgressBar() {
    return (
        <CardComponent title="Progress Bar" image={progress} content="this is Progress Bar" link="/progress"/>
    );
}

export default ProgressBar;
import React, {useState} from 'react';
import "./accordion.css";

function AccordionMain(props) {

    const data = [{
        question: "What is the purpose of this repository",
        answer: "This Repository is made for the learning purpose and core implementation of some most used components in industry level projects"
    }, {question: "What Tech Stack has been used", answer: "React.js for functionality, core css for basic styling."}, {
        question: "Who is the owner of this repository",
        answer: "Shrajan jain, you may contact me through linkedIn or my website shrajanjain.netlify.app"
    }];

    const [toggle, setToggle] = useState(null);

    const toggleHandler = (index) => {
        if (toggle === index) {
            setToggle(null);
        } else setToggle(index);
    }

    return (<div className="outer">
        {data.map((ele, index) => {
            return (<div className="inner">
                <div className="question" onClick={() => toggleHandler(index)}>
                    <div>{ele.question}</div>
                    <span>{`${toggle === index ? "➖" : "➕"}`}</span>
                </div>
                <div className={`answer ${toggle === index ? "show" : "hide"}`}>
                    {ele.answer}
                </div>
            </div>);
        })}
    </div>);
}

export default AccordionMain;
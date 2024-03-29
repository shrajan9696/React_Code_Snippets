let codeString = `import React, {useEffect, useRef, useState} from 'react';
import classes from "./otp.module.css";

function OTPMain(props) {

    const arr = ["", "", "", ""];

    const refArr = [useRef(), useRef(), useRef(), useRef()];

    const [initialValues, setInitialValues] = useState(arr);

    const [empty, setEmpty] = useState([true, true, true, true]);

    useEffect(() => {
        refArr[0].current.focus();
    }, []);

    const submitHandler = () => {
        const arr_x = initialValues.map((ele, i) => ele !== "");
        setEmpty(arr_x)
    }

    const changeHandler = (e, i) => {
        const copyValue = [...initialValues];
        copyValue[i] = e.target.value;
        setInitialValues(copyValue);

        if (e.target.value === "") return;
        if (i !== 3) refArr[i + 1].current.focus();

    }

    const handleKeyDown = (event, i) => {
        if (event.keyCode === 8) {
            console.log("came");
            refArr[i].current.focus();
        }
    }

    return (<div className={classes.main}>
        <div className={classes.inp}>
            {arr.map((ele, index) => {
                return (<input
                        value={initialValues[index]}
                        ref={refArr[index]}
                        onChange={(e) => changeHandler(e, index)}
                        maxLength={1}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                    />

                );
            })}
        </div>
        <button onClick={submitHandler} className={classes.sub}>Submit</button>
    </div>);
}
`
export default codeString;
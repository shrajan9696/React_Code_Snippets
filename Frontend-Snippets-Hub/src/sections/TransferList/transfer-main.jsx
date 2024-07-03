import React, {useState} from 'react';
import {Card, CardContent, CardHeader, Stack} from "@mui/material";
import {data} from "./transferItem.js";
import "./transfer.css";

function TransferMain(props) {

    const [leftData, setLeftData] = useState(data);
    const [rightData, setRightData] = useState([]);

    const clickHandler = (id, checked, direction) => {
        if (direction === "left") {
            const copy_left = [...leftData];
            const new_arr = copy_left.map((ele) => {
                if (ele.id === id) {
                    return {
                        ...ele, checked: !checked
                    }
                } else return {
                    ...ele
                }
            })
            setLeftData(new_arr);
        } else {
            const copy_right = [...rightData];
            const new_arr = copy_right.map((ele) => {
                if (ele.id === id) {
                    return {
                        ...ele, checked: !checked
                    }
                } else return {
                    ...ele
                }
            })
            setRightData(new_arr);
        }
    }

    const buttonClickHandler = (direction) => {
        if (direction === "left") {
            const leftCopy = [...leftData];

            const additional_right_arr = leftCopy.filter(ele => {
                if (ele.checked === true) {
                    return {
                        ...ele, checked: !ele.checked
                    }
                }
            });

            const removed_left_arr = leftCopy.filter(ele => !ele.checked);
            const additional_right_arr_unchecked = additional_right_arr.map(ele => {
                return ({...ele, checked: !ele.checked})
            })
            setRightData([...rightData, ...additional_right_arr_unchecked]);
            setLeftData([...removed_left_arr]);
        } else {
            const rightCopy = [...rightData];
            const additional_left_arr = rightCopy.filter(ele => {
                if (ele.checked === true) {
                    return {
                        ...ele,
                    }
                }
            });
            const additional_left_arr_unchecked = additional_left_arr.map(ele => {
                return ({...ele, checked: !ele.checked})
            })
            const removed_right_arr = rightCopy.filter(ele => !ele.checked);
            setLeftData([...leftData, ...additional_left_arr_unchecked]);
            setRightData([...removed_right_arr]);
        }
    }
    return (<Stack spacing={3} sx={{p: 4}}>
        <Card>
            <CardHeader title="solution"/>
            <CardContent>
                <div className={`transfer-main`}>
                    <div className={`transfer-box`}>
                        {leftData.map(ele => (<div onClick={() => clickHandler(ele.id, ele.checked, "left")}
                                                   className={`${ele.checked ? "transfer-checked" : null} transfer-list`}
                        >
                            {ele.title}
                        </div>))}
                    </div>
                    <div>
                        <button onClick={() => buttonClickHandler("left")}  className={`transfer-button`}>Left to Right</button>
                        <button onClick={() => buttonClickHandler("right")}  className={`transfer-button`}>Right to Left</button>
                    </div>
                    <div className={`transfer-box`}>
                        {rightData.map(ele => (<div
                            className={`${ele.checked ? "transfer-checked" : null} transfer-list`}
                            onClick={() => clickHandler(ele.id, ele.checked, "right")}
                        >{ele.title}</div>))}
                    </div>
                </div>
            </CardContent>
        </Card>
    </Stack>);
}

export default TransferMain;

let codeString = `
 const [clickCount, setClickCount] = useState(0);
    const [hoverCount, setHoverCount] = useState(0);

    const clickHandler = (element) => {
        setClickCount(element);
    }

    const hoverHandler = (element) => {
        setHoverCount(element);
    }
    
    <div className={classes.main}>
                        <div className={classes.star}>
                            {[1, 2, 3, 4, 5].map((ele, index) => {
                                return (<>
                                    <StarOutlineOutlinedIcon fontSize="large"
                                                             onClick={() => clickHandler(ele)}
                                                             onMouseOver={() => hoverHandler(ele)}
                                                             onMouseLeave={() => hoverHandler(clickCount)}
                                                             sx={ele<=(hoverCount||clickCount)?{fill: '#ffdd00'}:""}
                                    />
                                </>)
                            })}
                        </div>
                    </div>
`

 export default codeString;
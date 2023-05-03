import React from "react";

//const h = 0.6 * Screen.height;

const Scroll = (props) => {
    return (
        <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
            {props.children}
        </div>
    );
};

export default Scroll;
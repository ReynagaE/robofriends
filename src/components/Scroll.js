import React from "react";

//const h = 0.6 * Screen.height;

const Scroll = (props) => {
    return (
        <div style={{overflowY: 'scroll', border: '5px solid black', height: '100hv', position: "static", left: 0, bottom: 0, width: '100%'}}>
            {props.children}
        </div>
    );
};

export default Scroll;
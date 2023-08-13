import React from 'react';
import './BackDrop.css';
import ReactDOM from "react-dom";

// 获取backdrop的根元素
const backdropRoot = document.getElementById('backdrop-root');

const Backdrop = (props) => {
    return ReactDOM.createPortal(<div className="backdrop">
        {props.children}
    </div>, backdropRoot);
};

export default Backdrop;

import React from "react";
import "../../res/css/cross.css";

const Cross = () => {
    const handleCross = (e) => {
        e.preventDefault();
        window.location.href = "/";
    };

    return (
        <div className="cross">
            <a target="_blank">
                <i onClick={handleCross} className="fa fa-times"/>
            </a>
        </div>
    );
};

export default Cross;

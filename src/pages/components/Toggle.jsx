import { useState } from "react";

export default ({label}) => {
    const [on, setOn] = useState(false)

    function sliderHandler(e) {
        e.stopPropagation()
        setOn(!on)
    }

    return (
        <div onClick={(e) => e.stopPropagation()} className="toggle">
            <label>{label}</label>
            <div onClick={sliderHandler} className={'toggleSlider ' + (on?'on':'')}></div>
        </div>
    );
}
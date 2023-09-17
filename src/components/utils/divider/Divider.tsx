import React from "react";
import "./Divider.css";

function Divider({index, allCount}: { index: number, allCount: number }) {
    return (
        (index === allCount - 1) ?
            null
            :
            <hr className={'divider'}/>
    )
}

export default Divider;
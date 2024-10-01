import React from "react";
import './TotalTile.css'
import HeaderTitle from "../headerTitle/HeaderTitle";

function TotalTile({total}: { total: number }) {
    return (
        <HeaderTitle text={`Total: ${total}`} className={'total-tile'}/>
    )
}

export default TotalTile
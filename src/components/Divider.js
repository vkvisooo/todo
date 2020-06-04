import React from "react";
export default function Divider(props) {
    return (
        <div className={`${props.className} row col-12 ml-0 align-items-center`}>
            <hr className="col" />
            <div className="col-auto">{props.text}</div>
            <hr className="col" />
        </div>
    )
}
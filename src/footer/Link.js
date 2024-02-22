import React from "react";
import style from "./Link.module.scss";

export const Link = (props) => {
    return (
        <div style={props.style} className={style.link}></div>
    )
}
import React from "react";
import style from "./Link.module.scss";

export const Link = (props) => {
    return (
        <a href={props.link} className={style.link} target="_blank"><img src={props.img} alt="link"/></a>
    )
}
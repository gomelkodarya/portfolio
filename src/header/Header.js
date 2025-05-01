import {React, useState} from "react";
import style from './Header.module.scss'
import {Nav} from "../nav/Nav";
import styleContainer from "../common/styles/Container.module.scss";
import {ReactComponent as Icon} from "../assets/icons/menuIcon.svg";
import {ReactComponent as CloseIcon} from "../assets/icons/closeIcon.svg";

export const Header = () => {
    const [isOpen, setOpen] = useState();
    
    return (
        <header className={style.header}>
            <div className={`${styleContainer.container} ${style.headerContainer}`}>
                <Nav isOpen={isOpen}/>
                <button className={style.headerMenuButton} onClick={() => setOpen(!isOpen)} >
                    {!isOpen ? <Icon/> : <CloseIcon/>}
                </button>
            </div>
        </header>
    )
}
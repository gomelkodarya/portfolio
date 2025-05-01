import React from "react";
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Link} from "./Link";
import gitHubIcon from "./../assets/icons/github.png";
import linkedinIcon from "./../assets/icons/linkedin.png"

export const Footer = () => {
    const github = {
        backgroundImage: `url(${gitHubIcon})`
    }
    const linkedin = {
        backgroundImage: `url(${linkedinIcon})`
    }

    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Darya Hamelka</h2>
                <div className={style.linksBlock}>
                    <Link style={github} link={'https://github.com/gomelkodarya'} img={gitHubIcon}/>
                    <Link style={linkedin} link={'https://www.linkedin.com/in/darya-hamelka-62a3a4208/'} img={linkedinIcon}/>
                </div>
                <p>&copy; 2021 All Rights Reserved</p>
            </div>
        </div>
    )
}
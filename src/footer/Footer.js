import React from "react";
import style from './Footer.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Link} from "./Link";
import facebookIcon from "./../assets/icons/facebook.png";
import instagramIcon from "./../assets/icons/instagram.png";
import linkedinIcon from "./../assets/icons/linkedin.png"

export const Footer = () => {
    const facebook = {
        backgroundImage: `url(${facebookIcon})`
    }
    const instagram = {
        backgroundImage: `url(${instagramIcon})`
    }
    const linkedin = {
        backgroundImage: `url(${linkedinIcon})`
    }

    return (
        <div className={style.footer}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h2>Darya Gomelko</h2>
                <div className={style.linksBlock}>
                    <Link style={facebook}/>
                    <Link style={instagram}/>
                    <Link style={linkedin}/>
                </div>
                <p>&copy; 2021 All Rights Reserved</p>
            </div>
        </div>
    )
}
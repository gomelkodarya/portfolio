import React from "react";
import style from './Nav.module.scss';
import { Link, Element } from 'react-scroll';

export const Nav = ({isOpen}) => {
    return (
        <div className={`${style.nav} ${isOpen ? style.active : ''}`}>
            {/* <a href="#main">Home</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a> */}
            <Link activeClass={style.active} to="main" spy={true} smooth={true} duration={500} offset={-71} onSetActive={(to) => {
    window.history.replaceState(null, '', `#${to}`);
  }}>Home</Link>
            <Link activeClass={style.active} to="about-me" spy={true} smooth={true} duration={500} offset={-71} onSetActive={(to) => {
                window.history.replaceState(null, '', `#${to}`);
            }}>About me</Link>
            <Link activeClass={style.active} to="skills" spy={true} smooth={true} duration={500} offset={-71} onSetActive={(to) => {
    window.history.replaceState(null, '', `#${to}`);
  }}>Skills</Link>
            <Link activeClass={style.active} to="projects" spy={true} smooth={true} duration={500} offset={-71} onSetActive={(to) => {
    window.history.replaceState(null, '', `#${to}`);
  }}>Projects</Link>
            <Link activeClass={style.active} to="contact" spy={true} smooth={true} duration={500} offset={-71} onSetActive={(to) => {
    window.history.replaceState(null, '', `#${to}`);
  }}>Contact</Link>
        </div>
    )
}
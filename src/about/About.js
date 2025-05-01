import React, { useState } from "react";
import style from './About.module.scss';
import styleContainer from '../common/styles/Container.module.scss';
import { Title } from "../common/components/title/Title";

export const About = () => {
    
    return (
        <div id="about-me" className={style.contactBlock}>
            <div className={`${styleContainer.container} ${style.contactContainer}`}>
                <Title text="About me" />
                <div className={style.textContainer}>
                <p className={style.text}>
                    I am a results-oriented Front-End and WordPress Developer with over 3 years of experience building responsive, user-friendly websites and applications.
                    </p>
                <p className={style.text}>
                    Skilled in HTML, CSS, and JavaScript, with a good foundation in React for modern web development.
                    </p>
                <p className={style.text}>
                    I create user-friendly, accessible, and visually appealing web projects.
                    I combine problem-solving skills, precision, and teamwork to consistently achieve project goals.
                </p>
                </div>
            </div>
        </div>
    );
};
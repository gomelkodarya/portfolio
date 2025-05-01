import React from "react";
import style from './Main.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import photo from "../assets/image/photo.jpg";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';

export const Main = () => {
    gsap.registerPlugin(useGSAP);

    const container = useRef();

    useGSAP(() => {
        gsap.from(".text", {
            opacity: 0,
            x: -50,
            duration: 1.5,
            stagger: 1,
            delay: 0.2,
            ease: "easeOut"
        });
        gsap.from(".photo", {
            opacity: 0,
            x: 50,
            duration: 1.5,
            stagger: 1,
            delay: 0.2,
            ease: "easeOut"
        });
    }, { scope: container });

    return (
        <div id={'main'} className={style.mainBlock}>
            <div ref={container} className={styleContainer.container}>
                
                <div className={`${style.text} text`}>
                    <p className={style.pretitle}>Hi There</p>
                    <h1>I'm Darya Hamelka</h1>
                    <p>Frontend Developer</p>
                </div>
               
                {/* <div className={style.color_block}></div> */}
                <div className={`${style.photo} photo`}><img src={photo} alt='developer-photo'/></div>
            </div>

        </div>
    )
}
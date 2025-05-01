import React from "react";
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from "./Skill";
import {Title} from "../common/components/title/Title";
import htmlIcon from "../assets/icons/programming.png";
import jsIcon from "../assets/icons/js.png";
import reactIcon from "../assets/icons/atom.png";
import tsIcon from "../assets/icons/typescript.png";
import reduxIcon from "../assets/icons/redux.png";
import gitIcon from "../assets/icons/git.png";
import wordpressIcon from "../assets/icons/wordpress.png";
import webflowIcon from "../assets/icons/webflow.png";
import phpIcon from "../assets/icons/php.png";
import figmaIcon from "../assets/icons/figma.png";
import restApiIcon from "../assets/icons/rest-api.png";
import technologiesIcon from "../assets/icons/technologies.png";
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link, Element } from 'react-scroll';

export const Skills = () => {
    const html = {
        backgroundImage: `url(${htmlIcon})`
    }
    const js = {
        backgroundImage: `url(${jsIcon})`
    }
    const react = {
        backgroundImage: `url(${reactIcon})`
    }
    const typescript = {
        backgroundImage: `url(${tsIcon})`
    }
    const redux = {
        backgroundImage: `url(${reduxIcon})`
    }
    const git = {
        backgroundImage: `url(${gitIcon})`
    }
    const restApi = {
        backgroundImage: `url(${restApiIcon})`
    }
    const wordpress = {
        backgroundImage: `url(${wordpressIcon})`
    }
    const webflow = {
        backgroundImage: `url(${webflowIcon})`
    }
    const php = {
        backgroundImage: `url(${phpIcon})`
    }
    const figma = {
        backgroundImage: `url(${figmaIcon})`
    }
    const technologies = {
        backgroundImage: `url(${technologiesIcon})`
    }

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const container = useRef();

    useGSAP(() => {
        gsap.from(".skill", {
          scrollTrigger: {
            trigger: ".skills",
            start: "top 80%",
            toggleActions: "play none none none"
          },
          y: 50,
          opacity: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.out"
        });
      }, { scope: container });

    return (
        <div ref={container} id={'skills'} className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={`${style.skills} skills`}>
                    <Skill style={html} title={'HTML/CSS'} />
                    <Skill style={js} title={'JavaScript'} />
                    <Skill style={react} title={'React'} />
                    <Skill style={redux} title={'Redux/Redux Toolkit'} />
                    <Skill style={typescript} title={'TypeScript'} />
                    <Skill style={restApi} title={'Rest API'} />
                    <Skill style={git} title={'GIT'} />
                    <Skill style={technologies} title={'Material UI'} />
                    <Skill style={wordpress} title={'WordPress'} />
                    <Skill style={php} title={'PHP'} />
                    <Skill style={webflow} title={'Webflow'} />
                    <Skill style={figma} title={'Figma'} />
                </div>
            </div>
        </div>
    )
}
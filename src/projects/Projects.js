import React from "react";
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Project} from "./Project";
import {Title} from "../common/components/title/Title";
import todolistImage from "../assets/image/todo.png";
import pizzaImage from "../assets/image/pizza.png";
import simulatorMultiplicationTableImage from "../assets/image/simulator-multiplication-table.png";
import wordpressImage from "../assets/image/wordpress.png";
import uberImage from "../assets/image/uber.png";
import pointImage from "../assets/image/point.png";
import wineImage from "../assets/image/vino.png";
import portfolioImage from "../assets/image/portfolio.png"
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Projects = () => {
    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }
    const pizza = {
        backgroundImage: `url(${pizzaImage})`
    }
    const simulatorMultiplicationTable = {
        backgroundImage: `url(${simulatorMultiplicationTableImage})`
    }
    const wordpress = {
        backgroundImage: `url(${wordpressImage})`
    }
    const uber = {
        backgroundImage: `url(${uberImage})`
    }
    const point = {
        backgroundImage: `url(${pointImage})`
    }
    const wine = {
        backgroundImage: `url(${wineImage})`
    }
    const portfolio = {
        backgroundImage: `url(${portfolioImage})`
    }

    gsap.registerPlugin(useGSAP, ScrollTrigger);

    const container = useRef();

    useGSAP(() => {
        gsap.from(".project", {
          scrollTrigger: {
            trigger: ".projects",
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
        <div ref={container} id={'projects'} className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={`${style.projects} projects`}>                
                    <Project                
                        style={pizza}
                        title={'Pizza SPA'}
                        description={'Stack: React, Redux Toolkit, REST API'}
                        link={'https://pizza-kappa-one.vercel.app/'}
                        gitHub={'https://github.com/gomelkodarya/pizza'}
                    />
                    <Project
                        style={todolist}
                        title={'Todolist SPA'}
                        description={'Stack: React, Redux, TypeScript, REST API, Material UI'}
                        link={'https://todo-xi-beige.vercel.app'}
                        gitHub={'https://github.com/gomelkodarya/todo'}
                    />
                    <Project                
                        style={portfolio}
                        title={'Portfolio SPA'}
                        description={'Stack: React, GSAP, EmailJS, SCSS'}
                        link={'https://portfolio-cyan-tau-36.vercel.app/'}
                        gitHub={'https://github.com/gomelkodarya/portfolio'}
                    />
                    <Project
                        style={simulatorMultiplicationTable}
                        title={'Simulator multiplication table SPA'}
                        description={'Stack: JavaScript, LESS, JSON, WebStorage, SetInterval, Promises'}
                        link={'https://simulator-multiplication-table.vercel.app/'}
                        gitHub={'https://github.com/gomelkodarya/simulator-multiplication-table'}
                    />
                    <Project
                        style={wine}
                        title={'Wine'}
                        description={'Stack: JavaScript, GSAP'}
                        link={'https://wine-daryas-projects-e3680f06.vercel.app/'}
                        gitHub={'https://github.com/gomelkodarya/vino.git'}
                    />
                    <Project
                        style={point}
                        title={'Point'}
                        description={'Stack: JavaScript, GSAP'}
                        link={'https://point-coral-alpha.vercel.app/'}
                        gitHub={'https://github.com/gomelkodarya/point'}
                    />
                    <Project
                        style={wordpress}
                        title={'WordPress intensive'}
                        description={'Stack: HTML, CSS, Figma'}
                        link={'https://wordpress-flame-one.vercel.app/'}
                        gitHub={'https://github.com/gomelkodarya/wordpress'}
                    />
                    <Project
                        style={uber}
                        title={'Uber'}
                        description={'Stack: HTML, CSS, SASS, Figma'}
                        link={'https://uber-dusky.vercel.app/'}
                        gitHub={'https://github.com/gomelkodarya/uber'}
                    />
                </div>
            </div>
        </div>
    )
}
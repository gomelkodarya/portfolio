import React from "react";
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Project} from "./Project";
import {Title} from "../common/components/title/Title";
import todolistImage from "../assets/image/todolist.jpg";
import socialImage from "../assets/image/social.jpg";

export const Projects = () => {
    const todolist = {
        backgroundImage: `url(${todolistImage})`
    }
    const social = {
        backgroundImage: `url(${socialImage})`
    }

    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project style={todolist} title={'Todolist'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                    <Project style={social} title={'Social network'} description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'}/>
                </div>
            </div>
        </div>
    )
}
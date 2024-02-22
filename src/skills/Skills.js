import React from "react";
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import {Skill} from "./Skill";
import {Title} from "../common/components/title/Title";
import htmlIcon from "../assets/icons/programming.png";
import jsIcon from "../assets/icons/js.png";
import reactIcon from "../assets/icons/atom.png";

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
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill style={html} title={'HTML/CSS'} description={'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.'}/>
                    <Skill style={js} title={'JavaScript'} description={'JS is a programming language that conforms to the ECMAScript specification.[11] JavaScript is high-level, often just-in-time compiled and multi-paradigm. It has dynamic typing, prototype-based object-orientation and first-class functions.'}/>
                    <Skill style={react} title={'React'} description={'React is a free and open-source front-end JavaScript library[3] for building user interfaces based on UI components.'}/>
                </div>
            </div>
        </div>
    )
}
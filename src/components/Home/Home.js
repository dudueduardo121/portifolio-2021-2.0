import React from 'react'
import './style.css'
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
//import { faArrowDown} from '@fortawesome/free-solid-svg-icons'

export default function Home() {


    return (
        <div className="challengeBoxContainer">
            <div className="homeContainer bdGrid">
                <div className="homeCollIcon">
                    <h1 className="homeTitle"><span>Olá Mundo!</span></h1>
                    {/* <FontAwesomeIcon className="icon" icon={faArrowDown} /> */}
                </div>
                <div className="homeCollImg">
                    <img src="img01.png" className="homeImg" alt=""/>
                </div>
            </div>
        </div>
    )
}

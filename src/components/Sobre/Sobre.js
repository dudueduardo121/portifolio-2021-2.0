import React, {useEffect} from 'react'
import './style.css'

/* inicio scrool-page react aos */
import Aos from 'aos'
import 'aos/dist/aos.css'
/* fim */

/* Inicio Fontawesome icons */
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faImages } from '@fortawesome/free-regular-svg-icons';
import {
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter,
  faLinkedin,
  faReadme
} from '@fortawesome/free-brands-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


library.add(
  faUserGraduate,
  faImages,
  faGithubAlt,
  faGoogle,
  faFacebook,
  faTwitter,
  faLinkedin,
  faReadme
);
/* Fim */

export default function CompletedChallenges() {
    
    useEffect(() => {
        Aos.init({duration: 2000});
    }, []);

    return (
        <div className="container bgContainer">
            <div className="row">
                <div className="col-12 text-center linha">
                    <h1>
                        Sobre
                    </h1>
                </div>
            </div>
            <div className="row" data-aos="fade-up">
                <div className="col-12 col-md-5 colunaImg">
                    <img src="resume.svg" alt=""/>
                </div>
                <div className="col-12 col-md-6 align-self-center colunaContent">
                    <h3>
                        Desenvolvedor Front End Jr.
                    </h3>
                    <p>
                        Atualmente, desenvolvedor front end jr na UOLEdtech.
                    </p>
                    <p>
                        Trabalhei anteriormente como estagiario suporte sistemas Lbca advogados. 
                    </p>

                    <div className="midiaSociais">
                        <a href="https://www.facebook.com/eduardo.dudu.5496" target="_blanck">
                            <FontAwesomeIcon className="faIcon" icon={ faFacebook }></FontAwesomeIcon>
                        </a>
                        <a href="https://www.linkedin.com/in/eduardo-gomes12/" target="_blanck">
                            <FontAwesomeIcon className="faIcon" icon={ faLinkedin }></FontAwesomeIcon>
                        </a>
                        <a href="https://github.com/dudueduardo121" target="_blanck">
                            <FontAwesomeIcon className="faIcon" icon={ faGithubAlt }></FontAwesomeIcon>
                        </a>
                        <a href="curricEduardo.pdf" target="_blanck">
                            <FontAwesomeIcon className="faIcon" icon={ faReadme }></FontAwesomeIcon>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

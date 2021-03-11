import React from 'react'
import './style.css'
/* 
import { useEffect} from 'react'; */

/* inicio scrool-page react aos */
/* import Aos from 'aos'
import 'aos/dist/aos.css' */
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
  faWhatsapp,
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
  faWhatsapp
);
/* Fim */

export default function Footer() {

/*     useEffect(() => {
        Aos.init({duration: 2000});
    }, []); */

    return (
        <footer className="countdownContainer">
            <div className="text-center p-3 footer">
                <div className="footerIcons">
                    <a href="https://www.facebook.com/eduardo.dudu.5496">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.linkedin.com/in/eduardo-gomes12/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/dudueduardo121">
                        <FontAwesomeIcon icon={faGithubAlt} />
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=11958688430" target="_blanck">
                        <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                </div>
                <p>Copyright © Eduardo | 2021</p>
            </div>
        </footer>
    )
}

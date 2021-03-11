import React, { useEffect } from "react";
import './style.css'

//import Carousel from "react-elastic-carousel";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


/* inicio scrool-page react aos */
import Aos from 'aos'
import 'aos/dist/aos.css'
/* fim */


/* const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2},
  { width: 768, itemsToShow: 2 },
  { width: 1200, itemsToShow: 2 }
];
 */

export default function Portifolio() {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, []);


  return (
    <div className="containerPotifolio">
      <div className="row">
        <div className="col-12 text-center linha">
          <h1>
            Portifolio
          </h1>
        </div>
      </div>

      <div className="row rowSlider" data-aos="fade-up">
        <div className="col-12">
          <div className="row">
              <div className="col-12 col-md-4 sliderItem">
                <div className="card-portifolio">
                  <img src="logo-01.png" alt=""/>
                  <a href="https://netflix-clone-estudo.netlify.app" target="_blanck" className="buttonSlider">
                    <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </div>
              </div>

              <div className="col-12 col-md-4 sliderItem">
                <div className="card-portifolio">
                  <img src="logo-02.png" alt=""/>
                  <a href="https://leitor-texto-js.netlify.app" target="_blanck" className="buttonSlider">
                   <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 sliderItem">
                <div className="card-portifolio">
                  <img src="logo-03.png" alt=""/>
                  <a href="https://pokebola-api.netlify.app" target="_blanck" className="buttonSlider">
                   <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 sliderItem">
                <div className="card-portifolio">
                  <img src="logo-04.png" alt=""/>
                  <a href="https://moveit-next-pq0n8fsf3-dudueduardo121.vercel.app/" target="_blanck" className="buttonSlider">
                   <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 sliderItem">
                <div className="card-portifolio">
                  <img src="logo-05.png" alt=""/>
                  <a href="https://focused-curran-51a87d.netlify.app" target="_blanck" className="buttonSlider">
                   <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </div>
              </div>
              <div className="col-12 col-md-4 sliderItem">
                <div className="card-portifolio">
                  <img src="logo-06.png" alt=""/>
                  <a href="https://suspicious-euler-b3395d.netlify.app" target="_blanck" className="buttonSlider">
                   <FontAwesomeIcon icon={faExternalLinkAlt} />
                  </a>
                </div>
              </div>
          </div>
        </div>
      </div>

    </div>
  );
}

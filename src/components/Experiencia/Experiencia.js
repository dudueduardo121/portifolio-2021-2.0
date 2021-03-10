import React from 'react'
import './style.css'


/* import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faCode, faRocket } from '@fortawesome/free-solid-svg-icons' */


/* inicio scrool-page react aos */
/* import Aos from 'aos'
import 'aos/dist/aos.css' */
/* fim */

export default function Experiencia() {

/*     useEffect(() => {
        Aos.init({duration: 2000});
    }, []); */

    return (
        <div className="countdownAprendiz">
            <div className="row">
                <div className="col-12 text-center linha">
                    <h1>Experiência</h1>
                </div>
            </div>

            <div className="container countContainer" >
                <div className="row">
                    <div className="col-12 col-md-6 my-3">
                        <div className="card">
                            <div className="cardBody">
                                <div className="cardContent">
                                   {/*  <FontAwesomeIcon className={styles.faIcon} icon={faCode}/>  */}  
                                    <h2>
                                        Desenvolvedor Front-End Junior - UolEdtech
                                    </h2>
                                    <p>
                                        Atuando no desenvolvimento de paginas web voltadas para cursos EAD, com as linguagens Java Script,Jquery,Bootstrap,Html e Css.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 my-3">
                        <div className="card">
                            <div className="cardBody">
                                <div className="cardContent">
                                    {/* <FontAwesomeIcon className={styles.faIcon} icon={faRocket}/> */}
                                    <h2>
                                        Estagiário Suporte e Sistemas - Lee Brock Camargo Advogados
                                    </h2>
                                    <p>
                                        Suporte no atendimento aos usuários auxiliando no uso do sistema Legal Box, manutenções corretivas e de melhorias nas linguagens Java Script,Jquery,Bootstrap,Html,Css e Asp Clássico.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

import React from 'react';
import './style.css'
/* inicio scrool-page react aos */


/* fim */

export default function Habilidades() {


    const percentage = [50, 40, 30, 20, 60, 70, 80, 90, 35]

    return (
        <div className="countdownContainer">
            <div className="row">
                <div className="col-12 text-center linha">
                    <h1>
                    <span>Habilidades</span>
                    </h1>
                </div>
            </div>
            <div className="container">
                <div className="row bgRow">
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="colSkill">
                                    <span>Java script</span>
                                    <div className="skill">
                                        <div className="skillPorcentagem" style={{ width: 50 + '%' }}>{percentage[0]}%</div>
                                    </div>
                                </div>
                                <div className="colSkill">
                                    <span>React js</span>
                                    <div className="skill">
                                        <div className="skillPorcentagem" style={{ width: 40 + '%' }}>{percentage[1]}%</div>
                                    </div>
                                </div>
                                <div className="colSkill">
                                    <span>Bootstrap 4</span>
                                    <div className="skill">
                                        <div className="skillPorcentagem" style={{ width: 70 + '%' }}>{percentage[5]}%</div>
                                    </div>
                                </div>
                                <div className="colSkill">
                                    <span>Html 5</span>
                                    <div className="skill">
                                        <div className="skillPorcentagem" style={{ width: 90 + '%' }}>{percentage[7]}%</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-6">
                                <div className="colSkill">
                                    <span>Css</span>
                                    <div className="skill">
                                        <div className="skillPorcentagem" style={{ width: 70 + '%' }}>{percentage[5]}%</div>
                                    </div>
                                </div>
                                <div className="colSkill">
                                    <span>Scss</span>
                                    <div className="skill">
                                        <div className="skillPorcentagem" style={{ width: 70 + '%' }}>{percentage[5]}%</div>
                                    </div>
                                </div>
                                <div className="colSkill">
                                    <span>Sql server</span>
                                    <div className="skill">
                                        <div className="skillPorcentagem" style={{ width: 35 + '%' }}>{percentage[8]}%</div>
                                    </div>
                                </div>
                                <div className="colSkill">
                                    <span>Jquery</span>
                                    <div className="skill">
                                        <div className="skillPorcentagem" style={{ width: 30 + '%' }}>{percentage[2]}%</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-12 col-md-5">
                        <img src="Programming-amico.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

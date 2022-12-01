import React from 'react';
import { Link } from 'react-router-dom';
import CounterUp from './CounterUp';


const CounterUpTwo = () => {
    return (
        <div className="section section-padding expert-counterup-area">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5">
                        <div className="section-heading heading-left">
                            <span className="subtitle">Expertos</span>
                            <h2>¿Qué nos hace especiales?</h2>
                            <p className="mb--50">Nuestra creatividad y habilidad para combinar la tecnología de la inteligencia artificial con la web, nos hace únicos y especiales.</p>
                            <Link to={process.env.PUBLIC_URL + "/contact"} className="axil-btn btn-large btn-fill-primary">Contactar Gratis</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-xl-1">
                        <div className="row">
                            <CounterUp colSize="col-sm-6" layoutStyle="counterup-style-2" evenTopMargin="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default CounterUpTwo;
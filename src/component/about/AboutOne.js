import React from 'react';
import FormOne from '../contact/FormOne';


const AboutOne = () => {
    return (
        <section className="section section-padding-equal bg-color-light">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-us">
                            <div className="section-heading heading-left mb-0">
                                <span className="subtitle">Sobre nosotros</span>
                                <h2 className="title mb--40">Diseñamos, Construimos &amp; Mejoramos.</h2>




                                
                                <p>Emprecity es una empresa de servicios especializada en la creación de soluciones de marketing digital. Ofrecemos servicios como ecommerce, posicionamiento SEO, posicionamiento SEM, Google ads, Social Ads, gestión de redes sociales y integraciones con Inteligencia Artificial. </p>
                                <p>Nuestro equipo de profesionales cuenta con una amplia experiencia en estas áreas, lo que nos permite proporcionar soluciones que permiten a nuestros clientes obtener el mejor rendimiento de sus campañas de marketing. Nos esforzamos por ofrecer la mejor solución para cada cliente, adaptando nuestras soluciones a sus necesidades y objetivos.</p>
                                <p> Estamos comprometidos a proporcionar un servicio de alta calidad a un precio competitivo.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box">
                            <h3 className="title">Obten un presupuesto acorde a las necesidades de tu negocio</h3>
                           <FormOne />
                        </div>
                    </div>
                </div>
            </div>
            <ul className="shape-group-6 list-unstyled">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/bubble-7.png"} alt="Bubble" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-4.png"} alt="line" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/line-5.png"} alt="line" /></li>
            </ul>
        </section>
    )
}

export default AboutOne;
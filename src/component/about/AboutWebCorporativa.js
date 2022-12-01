import React from 'react';
import FormOne from '../contact/FormOne';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';


const AboutWebCorporativa = () => {
    return (
        <div className="section-padding">
            <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">Tú Pagina Web Prediseñada</span>
                                <h3 className="title">¿Por qué utilizar un prediseño de web?</h3>
                                <p>Es ideal para pequeñas empresas que buscan ahorrar tiempo y dinero. Además, los prediseños de web también son útiles para comenzar tu empresa, ya que en el futuro se pueden reutilizar para escalar.</p>
                            </div>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><FaCompress /> Presencia online</Accordion.Header>
                                    <Accordion.Body>
                                    Si no tienes una presencia en línea, es como si no existieras para tus clientes. Utiliza estas páginas para decirle a Google: ¡Aquí me tienes! y para que tus clientes potenciales te encuentren.

                                   
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><FaCode /> Mínima inversión</Accordion.Header>
                                    <Accordion.Body>
                                    
                                    Aprovecha la oportunidad de tener presencia online creando una página web que te permita decirle a Google: ¡Aquí estoy! y que tus clientes potenciales puedan encontrarte. ¡Empieza a construir tu presencia online hoy mismo!

                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><FaGlobe /> Diseño único y responsive</Accordion.Header>
                                    <Accordion.Body>
                                    Nuestras webs prediseñadas están completamente optimizadas para su uso en dispositivos móviles, y se pueden personalizar con tus imágenes, tipografía y colores corporativos para adaptarse a tu marca.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-6 offset-xl-1">
                        <div className="contact-form-box shadow-box mb--30">
                            <h3 className="title">Solicitar información</h3>
                            <FormOne />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutWebCorporativa;
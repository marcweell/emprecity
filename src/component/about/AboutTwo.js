import React from 'react';
import FormOne from '../contact/FormOne';
import Accordion from 'react-bootstrap/Accordion';
import { FaCompress, FaCode, FaGlobe } from 'react-icons/fa';


const AboutTwo = () => {
    return (
        <div className="section-padding">
            <div className="container">
            <div className="row">
                    <div className="col-lg-6">
                        <div className="why-choose-us">
                            <div className="section-heading heading-left">
                                <span className="subtitle">Sobre nosotros</span>
                                <h3 className="title">Diseño de paginas web</h3>
                                <h4>¿Por que importa que el diseño sea escalable?</h4>
                                <ul> 
  <li>Garantiza que un sitio web funcione correctamente en todos los dispositivos.</li>
  <li>Mejora la usabilidad y la satisfacción del usuario.</li>
  <li>Reduce el costo de mantener un sitio web.</li>
  <li>Asegura que un sitio web pueda crecer con su negocio.</li>
</ul>
                            </div>
                            <Accordion defaultActiveKey="1">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header><FaCompress /> Estrategia</Accordion.Header>
                                    <Accordion.Body>
                                        Elaboraremos una estrategia para desarrollar tú tienda online con éxito comienzando con el enfoque correcto. 
                                        Primero, debemos identificar el nicho de mercado al que se dirigirá. Esto significa crear un plan de marketing para alcanzar al público objetivo. 
                                        Después de seleccionar un nicho, debe investigar y entender los deseos y necesidades de su público objetivo. 
                                        Comenzaremos a diseñar una tienda online con productos y servicios que sean relevantes para el público.
                                   
                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header><FaCode /> Diseño</Accordion.Header>
                                    <Accordion.Body>
                                    
En primer lugar, debemos considerar tú audiencia objetivo y qué productos ofrecerás. Esto nos ayudará a determinar la estructura de la tienda y qué funcionalidades deberá tener. 

En segundo lugar, diseñaremos una interfaz atractiva para tú tienda. Esto incluye el diseño de la página y el uso de imágenes de calidad para destacar los productos.

En tercer lugar,  seleccionaremos el software de comercio electrónico adecuado para tú tienda. Debe tener todas las características necesarias para que tú tienda funcione correctamente. 

En cuarto lugar, configuraremos métodos de pago seguros. Esto garantizará que los clientes puedan comprar tus productos con confianza. 


                                    </Accordion.Body>
                                </Accordion.Item>
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header><FaGlobe /> Escalar</Accordion.Header>
                                    <Accordion.Body>
                                    El primer paso para escalar una tienda en línea con inteligencia artificial es definir nuestro target. Ademas deberemos incluir un plan para promocionar la tienda en línea a través de publicidad en redes sociales, SEO, contenido de calidad y otras formas de marketing digital.
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

export default AboutTwo;
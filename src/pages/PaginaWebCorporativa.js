import React from 'react';
import FooterOne from '../common/footer/FooterOne';
import HeaderOne from '../common/header/HeaderOne';
import BcrumbBannerOne from '../elements/breadcrumb/BcrumbBannerOne';
import ColorSwitcher from '../elements/switcher/ColorSwitcher';
import SEO from '../common/SEO';
import CtaLayoutOne from '../component/cta/CtaLayoutOne';
import SectionTitle from '../elements/section-title/SectionTitle';
import AboutThree from '../component/about/AboutThree';
import CounterUpTwo from '../component/counterup/CounterUpTwo';
import ServicePropDisenoWeb from '../component/service/ServicePropDisenoWeb';
import PricingDisenoWeb from '../component/pricing/PrincingDisenoWeb';
import AboutWebCorporativa from '../component/about/AboutWebCorporativa';



const PaginaWebCorporativa = () => {


    return (
        <>
        <SEO title="Pagina web corporativa prediseñada" />

        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
                title="Pagina web corporativa prediseñada"
                paragraph ="La presencia online es esencial para tú éxito. Nosotros diseñamos portales autogestionables y desarrollos a medida para hacer que tu marca destaque en la red."
                styleClass=""
                mainThumb="/images/banner/pagina-web-corporativa.png"
            />
            <div className='container ' >
                <div>
                <h2>¿Qué incluye tu web corporativa?</h2>
                <p><ul>
    <li>Una web con 5 páginas: Home, Servicios, Quiénes somos, Blog, Contacto.</li>
    <li>Diseño personalizado para reflejar la identidad de tu marca.</li>
    <li>Diseño responsive para que tus usuarios disfruten de la mejor experiencia en dispositivos móviles y tablets.</li>
    <li>Integración con tus redes sociales para aumentar la visibilidad de tu contenido.</li>
    <li>Formulario de contacto para recibir consultas de tus clientes, cumple con las normativas de la RGPD.</li>
    <li>Footer con textos legales para informar a tus usuarios sobre la política de privacidad.</li>
    <li>Aviso de cookies para cumplir con la normativa europea.</li>
    <li>Guía básica para la gestión de tu web para que puedas actualizarla de forma sencilla.</li>
</ul></p>
</div>
</div>
<div>
    <AboutWebCorporativa />



            </div>
            <CounterUpTwo />
            <div className="section section-padding bg-color-light">
                <div className="container">
                    <SectionTitle 
                        subtitle="Emprecity crea tu"
                        title="Diseño De Página web <br> Corporativa"
                        description="¿Estás buscando una solución para tu empresa que te ofrezca diseños personalizados, adaptadas a la imagen de marca, webs autogestionables, asistencia técnica y desarrollo? "
                        textAlignment="heading-center"
                        textColor=""
                    />
                    <div className="row">
                        <ServicePropDisenoWeb colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" itemShow="6" marginTop="no" />
                        
                    </div>
                    
                </div>
                
            </div>

            <div className="section bg-color-light section-padding">
                <div className="container">
                    <SectionTitle 
                        subtitle="Tarifas"
                        title="Diseño web"
                        description="Te prestamos el servicio para diseñar tu web corporativa"
                        textAlignment=""
                        textColor=""
                    />
                     <PricingDisenoWeb />
                </div>
                <ul className="list-unstyled shape-group-3">
                    <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/line-1.png"} alt="shape" /></li>
                    <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/bubble-4.png"} alt="shape" /></li>
                </ul>
            </div>
            
          

            <AboutThree />
           
            <CtaLayoutOne />
            <FooterOne parentClass="" />
        </main>
        </>
    )
}

export default PaginaWebCorporativa;
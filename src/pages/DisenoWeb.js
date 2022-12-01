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



const DisenoWeb = () => {


    return (
        <>
        <SEO title="Diseño Web" />

        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
                title="Diseño Web"
                paragraph ="La presencia online es esencial para tú éxito. Nosotros diseñamos portales autogestionables y desarrollos a medida para hacer que tu marca destaque en la red. ¡Te ayudamos a presentarte de la mejor manera a tu público!"
                styleClass=""
                mainThumb="/images/banner/disenoweb.png"
            />
            <CounterUpTwo />
            <div className="section section-padding bg-color-light">
                <div className="container">
                    <SectionTitle 
                        subtitle="Emprecity crea tu"
                        title="Diseño De Página web"
                        description="¿Buscas una solución para tu empresa? Diseños únicos, adaptados a tu marca, webs fáciles de gestionar, asistencia técnica y servicios de desarrollo. ¡Todo lo que necesitas!"
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

export default DisenoWeb;
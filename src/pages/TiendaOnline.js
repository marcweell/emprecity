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
import ServiceTiendaOnline from '../component/service/ServicePropDisenoWeb';
import PricingTiendaOnline from '../component/pricing/PrincingTiendaOnline';



const TiendaOnline = () => {


    return (
        <>
        <SEO title="Tienda Online" />

        <ColorSwitcher />
        <main className="main-wrapper">
            <HeaderOne />
            <BcrumbBannerOne 
                title="Tienda Online"
                paragraph ="¡Ahora es el momento de emprender en el mundo digital! Con nuestra solución, crea tu propia tienda online y gana visibilidad en todas las plataformas. ¡No esperes más, tu éxito está a un clic!"
                styleClass=""
                mainThumb="/images/banner/tiendaonline.png"
            />
            <CounterUpTwo />
            <div className="section section-padding bg-color-light">
                <div className="container">
                    <SectionTitle 
                        subtitle="Emprecity diseña tu"
                        title="Tienda Online"
                        description="Las ventajas de tener una tienda online profesional son muchas: mayor alcance de clientes, ahorro de costos, facilidad de gestión, mejor servicio al cliente, mayor seguridad y privacidad, mayor tiempo para generar ideas y mejorar el negocio. ¡Aprovecha la oportunidad y amplía tus ventas!"
                        textAlignment="heading-center"
                        textColor=""
                    />
                    <div className="row">
                        <ServiceTiendaOnline colSize="col-lg-4 col-md-6" serviceStyle="service-style-2" itemShow="6" marginTop="no" />
                        
                    </div>
                    
                </div>
                
            </div>

            <div className="section bg-color-light section-padding">
                <div className="container">
                    <SectionTitle 
                        subtitle="Tarifas"
                        title="Tienda Online"
                        description="Desarrollamos tu tienda online profesional con inteligencia artificial"
                        textAlignment=""
                        textColor=""
                    />
                     <PricingTiendaOnline/>
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

export default TiendaOnline;
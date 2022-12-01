import React from 'react';
import SectionTitle from '../../elements/section-title/SectionTitle';

const Datas = [
    {
        id: 1,
        title: "Nos encanta superar las expectativas de nuestros clientes",
        para: "Nuestra empresa cuenta con un equipo de expertos en diseño y desarrollo web acompañado por la última tecnología en inteligencia artificial. Estamos comprometidos con la satisfacción de nuestros clientes y estamos totalmente comprometidos con ofrecer el mejor servicio."
    },
    {
        id: 2,
        title: "Utilizamos lo último en tecnologia",
        para: "Utilizamos la última tecnología en inteligencia artificial para ofrecer un diseño y desarrollo web único y moderno. Estamos a la vanguardia de la industria para ofrecer productos y servicios de última generación."
    },
    {
        id: 3,
        title: "Ofrecemos un servicio personalizado",
        para: "Nuestra empresa se esfuerza por ofrecer un servicio personalizado a cada uno de nuestros clientes. Nuestro equipo está comprometido con la satisfacción de nuestros clientes y se asegura de que sus necesidades sean satisfechas."
    },
    {
        id: 4,
        title: "Calidad precio inmejorable",
        para: "Ofrecemos la mejor relación calidad-precio para nuestros productos y servicios. Estamos comprometidos a ofrecer productos de la mejor calidad al mejor precio."
    },
    {
        id: 5,
        title: "Asesoramiento y mantenimiento",
        para: "Nuestro equipo de asesores está siempre disponible para ayudarle a tomar las mejores decisiones para su proyecto"
    },
    {
        id: 6,
        title: "Servicio de Premium",
        para: "Estamos comprometidos con la calidad de nuestros productos y servicios. Ofrecemos un diseño y desarrollo web de alta calidad. Estamos totalmente comprometidos con la satisfacción de nuestros clientes."
    }
]




const AboutThree = () => {
    return (
        <div className="section section-padding bg-color-dark pb--80 pb_lg--40 pb_md--20">
            <div className="container">
                <SectionTitle 
                    subtitle="Estamos en tendencia"
                    title="Por qué deberias elegirnos"
                    description="Si buscas un desarrollo web de calidad que ofrezca seguridad, rapidez y flexibilidad, entonces emprecity es la mejor opción para tu empresa"
                    textAlignment="heading-left heading-light-left mb--100"
                    textColor=""
                />

                <div className="row">
                    {Datas.map((data) => (
                        <div className="col-lg-4" key={data.id}>
                            <div className="about-quality">
                                <h3 className="sl-number">{data.id}</h3>
                                <h5 className="title">{data.title}</h5>
                                <p>{data.para}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            <ul className="list-unstyled shape-group-10">
                <li className="shape shape-1"><img src={process.env.PUBLIC_URL + "/images/others/circle-1.png"} alt="Circle" /></li>
                <li className="shape shape-2"><img src={process.env.PUBLIC_URL + "/images/others/line-3.png"} alt="Circle" /></li>
                <li className="shape shape-3"><img src={process.env.PUBLIC_URL + "/images/others/bubble-5.png"} alt="Circle" /></li>
            </ul>
        </div>
    )
}

export default AboutThree;
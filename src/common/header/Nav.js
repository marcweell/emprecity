import React from 'react';
import { Link } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa";


const Nav = () => {
    return (
        <nav className="mainmenu-nav">
            <ul className="mainmenu">
                <li className="menu-item-has-children">
                    <Link to="#">Digital Agency <FaAngleDown /> </Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/digital-agency"}>Diseño WEb</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/creative-agency"}>Creative Agency</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/personal-portfolio"}>Personal Portfolio</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/home-startup"}>Home Startup</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/corporate-agency"}>Corporate Agency</Link></li>
                        <li><a href="https://new.axilthemes.com/demo/react/abstrak-rtl/">RTL Demo</a></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">Desarrollo Web <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/diseno-web"}>Diseño Web</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/tienda-online"}>Tienda Online</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/pagina-web-corporativa"}>Web Prediseñadas</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/service-details/design"}>App</Link></li>
                    </ul>
                </li>


                <li className="menu-item-has-children">
                    <Link to="#">Marketing <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/project-grid-one"}>SEM</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-grid-two"}>SEO</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-grid-three"}>Contenido </Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-width-one"}>Social Ads</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-width-two"}>Email Marketing</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/project-details/plan-management"}>Reputación Online</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">Diseño <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                    <li><Link to={process.env.PUBLIC_URL + "/about-us"}>Diseño Gráfico</Link></li>
                    <li><Link to={process.env.PUBLIC_URL + "/about-us"}>Branding</Link></li>

                        <li><Link to={process.env.PUBLIC_URL + "/about-us"}>About Us</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/our-office"}>Our Office</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/case-study"}>Case Study</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/case-details/whitehorse"}>Case Study Details</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/team"}>Team</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/team-details/jane-cooper"}>Team Details</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/our-clients"}>Our Clients</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/testimonials"}>Testimonial</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/pricing-table"}>Pricing Table</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/typography"}>Typography</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/404"}>404 Page</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/coming-soon"}>Coming Soon</Link></li>
                    </ul>
                </li>
                <li className="menu-item-has-children">
                    <Link to="#">Clientes <FaAngleDown /></Link>
                    <ul className="axil-submenu">
                        <li><Link to={process.env.PUBLIC_URL + "/blog-grid"}>Blog</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/blog-details/1"}>Standard Post</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/blog-details/2"}>Gallery Post</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "/blog-details/3"}>Video Post</Link></li>
                        {/* <li><Link to={process.env.PUBLIC_URL + "#"}>Audio Post</Link></li>
                        <li><Link to={process.env.PUBLIC_URL + "#"}>Quote Post</Link></li> */}
                    </ul>
                </li>
                <li><Link to={process.env.PUBLIC_URL + "/contact"}>Contactar</Link></li>
            </ul>
        </nav>
    )
}

export default Nav;
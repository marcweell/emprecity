import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import PricingData from "../../data/pricing/PricingDataTiendaOnline.json";
import { FaCheck} from "react-icons/fa";


const getPriceingData = PricingData;

const billed = [
    {
        id: 1,
        label: "Unico Pago"
    },
    {
        id: 2,
        label: "Financiacion Gratis"
    }
]

const PricingTiendaOnline = () => {

    const [isActive, setActive] = useState("");

    useEffect(() => {
        setActive(billed[0].label.toLowerCase());
		
    }, []);


    const handleChange = (e) => {
        setActive(e.target.textContent.toLowerCase());
        
    };


    return (
        <>
            <div className="pricing-billing-duration">
                <ul>
                    {billed.map((data) => (
                        <li className="nav-item" key={data.id}>
                            <button onClick={handleChange} className={`nav-link ${data.label.toLocaleLowerCase() === isActive ? "active": ""}`}>{data.label}</button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="row">
                {getPriceingData.map((data, index) => (
                    <div className="col-lg-4" key={index}>
                        <div className="pricing-table pricing-borderd">
                            <div className="pricing-header">
                                <h3 className="title">{data.title}</h3>
                                <span className="subtitle">{data.subtitle}</span>
                                <div className="price-wrap">
                                    <div className="subtitle">
                                        <p className='body-font1'>Desde Solo</p>
                                        <span className="amount">{billed[0].label.toLowerCase() === isActive ? data.yprice : data.mprice }</span>
                                        <span className="duration">{billed[0].label.toLowerCase() === isActive ? data.yduration : data.mduration }</span>
                                       
                                        
                                    </div>
                                </div>
                                <div className="pricing-btn">
                                    <Link to="/contact" className="axil-btn btn-large btn-borderd">Empezar Diseño web {data.ahorro}</Link>
                        
                                </div>
                            </div>
                            <div className="pricing-body">
                                <ul className="list-unstyled">
                                    {data.facility.map((data, index) => (
                                        <li key={index}><FaCheck /> {data}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default PricingTiendaOnline;
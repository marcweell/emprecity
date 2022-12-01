import React from 'react';
import ServiceData from "../../data/service/DisenoTiendaOnline.json";



const AllData = ServiceData;

const ServicePropDisenoWeb = ({colSize, serviceStyle, itemShow, marginTop}) => {

	const topMargin = (index) => {
		if (marginTop === "yes") {
			if (index === 0) {
				return "mt--200 mt_md--0";
			} else if (index === 1) {
				return "mt--100 mt_md--0";
			}else {
				return "mt--0";
			}
		}else {
			return "";
		}
	}

    return (
		<>
			{AllData.slice(0, itemShow).map((data, index) => (
				<div className={`${colSize} ${topMargin(index)}`} key={index} >
					<div className={`services-grid ${serviceStyle}`}>
						<div className="thumbnail">
							<img src={process.env.PUBLIC_URL + data.image} alt="icon" />
						</div>
						<div className="content">
							<h5 className="title"> 
							<h5>{data.title}</h5>
							</h5>
							<p>{data.description}</p>
							
						</div>
					</div>
			 	</div>
			))}
		</>
    )
}

export default ServicePropDisenoWeb;
import React from 'react';
import CountUp from 'react-countup';
import TrackVisibility from 'react-on-screen';

const Data = [
    {  
        id: 1,
        light_icon: "/images/icon/icon-7.png",
        dark_icon: "/images/icon/icon-10.png",
        countNum: 8,
        text: "Años de experiencia"
    },
    {  
        id: 2,
        light_icon: "/images/icon/icon-8.png",
        dark_icon: "/images/icon/icon-11.png",
        countNum: 200,
        text: "Proyectos realizados"
    },
    {  
        id: 3,
        light_icon: "/images/icon/icon-9.png",
        dark_icon: "/images/icon/icon-12.png",
        countNum: 10,
        text: "Especialistas"
    },
    {  
        id: 4,
        light_icon: "/images/icon/apple.png",
        dark_icon: "/images/icon/apple-black.png",
        countNum: 20,
        text: "Confian en nosotros"
    }
   
];

const CounterUp = ({colSize, layoutStyle, evenTopMargin}) => {

    return (
        <>
            {Data.map((data) => (
                <div className={`${colSize} ${(data.id % 2  === 0) ? evenTopMargin : ""}`} key={data.id} >
                    <div className={`counterup-progress ${layoutStyle}`}>

                        { 
                            layoutStyle === "counterup-style-2" ? 
                            <div className="icon">
                                <img className="dark-icon" src={process.env.PUBLIC_URL + data.dark_icon} alt="Icon" />
                                <img className="light-icon" src={process.env.PUBLIC_URL + data.light_icon} alt="Icon" />
                            </div> : 
                            <div className="icon">
                                <img src={process.env.PUBLIC_URL + data.light_icon} alt="Icon" />
                            </div> 
                        }

                        <div className="count-number h2">
                            <TrackVisibility once>
                                {({isVisible}) => (
                                    <span className="number count">
                                        {isVisible ? <CountUp end={data.countNum} duration={1} /> : null}
                                    </span>
                                )}  
                            </TrackVisibility>
                            <span className="symbol">+</span>
                        </div>
                        <h6 className="title">{data.text}</h6>
                    </div>
                </div>
            ))}
        </>
    )
}



export default CounterUp;
import React from 'react'
import './Service.css'
import theme from '../../assets/theme_pattern.svg'
import services from '../../assets/services_data'
import arrow from '../../assets/arrow_icon.svg'

const Service = () => {
  return (
    <div id='Service' className='services'>
        <div className="services-title">
            <h1>My Services</h1>
            <img src={theme} alt="theme" />
        </div>

        <div className="services-container">
            {services.map((service,index)=>{
               return <div key={index} className='service-format'>
                    <h3>{service.s_no}</h3>
                    <h2>{service.s_name}</h2>
                    <p>{service.s_desc}</p>
                    <div className='service-read'>
                        <p>Read More</p>
                        <img src={arrow} alt="arrow" />
                    </div>
               </div>
             })}
        </div>

    </div>
  )
}

export default Service
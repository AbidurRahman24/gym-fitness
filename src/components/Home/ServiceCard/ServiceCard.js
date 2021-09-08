import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({service}) => {

    return (
        <div className="col-md-4">
            <div class="service-container ">
            <img src={service.img} alt="Avatar" class="image" style={{}} />
            <div class ="middle">
            <div class ="text">{service.name}</div>
            <p>{service.description}</p>
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;
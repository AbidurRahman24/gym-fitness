import React from 'react';
import './ServiceCard.css'

const ServiceCard = ({service, handleAddService}) => {
    
    return (
        <div className="col-md-4">
            <div class="service-container ">
            <img src={`data:image/png;base64,${service.image.img}`} alt="Avatar" class="image" style={{}} />
            <div class ="middle">
            <div class ="text">{service.title}</div>
            <p>{service.description}</p>
            <button onClick={()=>handleAddService(service._id)} className='btn btn-primary'>ADD TO CART</button>
            </div>
        </div>
        </div>
    );
};

export default ServiceCard;
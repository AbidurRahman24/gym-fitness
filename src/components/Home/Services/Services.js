import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [serviceInfo, setServiceInfo] = useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(response => response.json())
        .then(data => setServiceInfo(data));
    },[])
    const handleAddService =(e)=>{
        console.log(e);
    }
    return (
        <section>
            <div className='row'>
                {
                    serviceInfo.map(service => <ServiceCard handleAddService={handleAddService} service={service} ></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;
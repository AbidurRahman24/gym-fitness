import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [serviceInfo, setServiceInfo] = useState([])
    const [card, setCard] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(response => response.json())
            .then(data => setServiceInfo(data));
    }, [])
    let history = useHistory()
    const handleAddService = (id) => {
        const newCard = [...card, id]
        setCard(newCard)
        const url = `/service/${id}`
        history.push(url)
    }
    return (
        <section>
            <div className='row'>
                {
                    serviceInfo.map(service => <ServiceCard handleAddService={handleAddService} key={service._id} service={service} ></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;
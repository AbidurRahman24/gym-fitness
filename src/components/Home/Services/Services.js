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
            <div className='trainig-text text-center pt-4 py-5 w-100' style={{fontFamily: 'Teko'}}>
                    <h2 className='pt-3'>Our Services</h2>
                    <p >After you decide to start training we will make sure you get the best fitness program. <br /> Our sport experts and latest sports equipment are the winning combination.</p>
                </div>
                {
                    serviceInfo.map(service => <ServiceCard handleAddService={handleAddService} key={service._id} service={service} ></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;
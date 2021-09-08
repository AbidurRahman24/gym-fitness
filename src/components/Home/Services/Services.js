import React from 'react';
import svImg1 from '../../../img/GROUP FITNESS.jpg'
import svImg2 from '../../../img/CARDIO PROGRAM.jpg'
import svImg3 from '../../../img/PERSONAL TRAINER.jpg'
import ServiceCard from '../ServiceCard/ServiceCard';
const serviceData = [
    {
        name: 'John Doe',
        description: 'Lorem ipsum dolor sit amet.',
        img: svImg1
    },
    {
        name: 'John Doe',
        description: 'Lorem ipsum dolor sit amet.',
        img: svImg2
    },
    {
        name: 'John Doe',
        description: 'Lorem ipsum dolor sit amet.',
        img: svImg3
    }
]

const Services = () => {
    return (
        <section>
            <div className='row'>
                {
                    serviceData.map(service => <ServiceCard service={service} ></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;
import React from 'react';

const ServiceCard = ({ serviceData }) => {
    const {ServiceName, ServiceDescription } = serviceData;
    return (
        <>
            <div class="card" style={{ width: '18rem' }}>
                <div class="card-body">
                    <div className='d-flex justify-content-between'>
                        <h5 class="card-title ">{ServiceName}</h5>
                        <h5 class="card-title p-2 mb-1 bg-success text-white" >Pending</h5>
                    </div>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Cras justo odio</li>
                    <li class="list-group-item">Dapibus ac facilisis in</li>
                    <li class="list-group-item">Vestibulum at eros</li>
                </ul>
                <div class="card-body">
                    <a href="/" class="card-link">Card link</a>
                    <a href="/" class="card-link">Another link</a>
                </div>
            </div>
        </>
    );
};

export default ServiceCard;
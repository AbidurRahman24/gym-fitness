import React from 'react';

const Card = ({ serviceData }) => {
    // console.log(serviceData);
    const {ServiceName, ServiceDescription } = serviceData;
    return (
        <>
        <h5>Service List</h5>
            <div class="card" style={{ width: '18rem' }}>
                <div class="card-body">
                    <div className='d-flex justify-content-between'>
                        <h5 class="card-title ">{ServiceName}</h5>
                        <h5 style={{borderRadius:'10px'}} class="card-title p-2 mb-1 bg-success text-white" >Pending</h5>
                    </div>
                    <p class="card-text">{ServiceDescription}</p>
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

export default Card;
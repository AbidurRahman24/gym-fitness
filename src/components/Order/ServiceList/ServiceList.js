import React, { useEffect, useState } from 'react';
import SiteBar from '../../Shared/SiteBar/SiteBar';
import ServiceCard from '../ServiceCard/ServiceCard';

const ServiceList = () => {
    const [serviceData, SetServiceData] = useState({});
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(response => response.json())
        .then(data => SetServiceData(data));
    },[])


    return (
        <>
            <div className="container-fluet ">
                <div className="row">
                    <div className="col-md-3">
                        <SiteBar></SiteBar>
                    </div>
                    <div className="col-md-9">
                        <ServiceCard serviceData={serviceData}></ServiceCard>
                    </div>
                </div>
            </div>



        </>
    );
};

export default ServiceList;
import React, { useEffect, useState } from 'react';
import SiteBar from '../../Shared/SiteBar/SiteBar';
import Card from '../Card/Card';

const ServiceList = () => {
    const [serviceData, SetServiceData] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/orders')
        .then(response => response.json())
        .then(data => {
            // console.log(data[0].ServiceName);
            SetServiceData(data[0])
        });
    },[])


    return (
        <>
            <div className="container-fluet ">
                <div className="row">
                    <div className="col-md-3">
                        <SiteBar></SiteBar>
                    </div>
                    <div className="col-md-9">
                        <div className='py-5'>
                        <h5>Service List</h5>
                        </div>
                        <Card serviceData={serviceData}></Card>
                    </div>
                </div>
            </div>



        </>
    );
};

export default ServiceList;
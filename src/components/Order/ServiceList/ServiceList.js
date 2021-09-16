import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceList = () => {
    const { id } = useParams()
    const [service, setService] = useState({})
    useEffect(()=>{
        const URL = `http://localhost:5000/services/${id}`
        fetch(URL)
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setService(data)
          })
    },[id])
    return (
        <div>
            thsi si service list
        </div>
    );
};

export default ServiceList;
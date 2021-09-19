import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './CheckoutService.css';
import SiteBar from '../../Shared/SiteBar/SiteBar';
import { UserContext } from '../../../App';
import Payment from '../Payment/Payment';



const CheckoutService = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [info, setInfo] = useState({})
    console.log(info);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const { id } = useParams()

    const [service, setService] = useState({})
    // console.log(service);
    useEffect(() => {
        const URL = `http://localhost:5000/services/${id}`
        fetch(URL)
            .then(res => res.json())
            .then(data => {

                setService(data)
            })
    }, [id])

    const handleSubmit = () => {
        const order = { ...loggedInUser, ServiceName: service.title, ServiceDescription: service.description, Order: info };
        fetch('http://localhost:5000/addOrder', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(order)
          })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <>
            <div className="container-fluet ">
                <div className="row">
                <div className="col-md-3">
                    <SiteBar></SiteBar>
                </div>
                <div className="col-md-9 py-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                    <h5>Booking Proccess</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input defaultValue={loggedInUser.name} onBlur={handleBlur} type="text" className="form-control" name="name" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email</label>
                            <input defaultValue={loggedInUser.email} onBlur={handleBlur} type="text" className="form-control" name="email" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Service Title</label>
                            <input defaultValue={service.title} onBlur={handleBlur} type="text" className="form-control" name="service"  />
                        </div>

                        <div className="form-group">
                        <label >Process to Payment</label>
                            <Payment handleBlur={handleBlur}></Payment>
                        </div>
                        
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    
                </div>
                </div>
            </div>


        </>
    );
};

export default CheckoutService;
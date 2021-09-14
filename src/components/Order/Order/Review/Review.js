import React, { useState, useContext  } from 'react';
import { UserContext } from '../../../../App';
import SiteBar from '../../../Shared/SiteBar/SiteBar';

const Review = () => {
    const [info, setInfo] = useState({})

    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const handleSubmit = () => {
        const reviews = { ...loggedInUser, review: info };
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviews)
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
            <div className="container-fluet row">
                <div className="col-md-3">
                    <SiteBar></SiteBar>
                </div>
                <div className="col-md-9  p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Doctor</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Name</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Email</label>
                        <input onBlur={handleBlur} type="text" className="form-control" name="email" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Feedback</label>
                        <textarea onBlur={handleBlur} type="text-aria" className="form-control" name="feedback" placeholder="Description" rows="4" cols="50"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
            </div>

        </>
    );
};

export default Review;
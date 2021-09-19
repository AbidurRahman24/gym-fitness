import React, { useContext, useState } from 'react';
import { UserContext } from '../../../App';
import './SiteBar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignOutAlt, faCalendar, faUsers, faCommentDots} from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const SiteBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled text-decoration-none">
                <li>
                    <Link to="/order" className="text-white">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Service</span> 
                    </Link>
                </li> <li>
                    <Link to="/order/servicelist" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <span>Service List</span> 
                    </Link>
                </li>
                <li>
                    <Link to="/order/review" className="text-white">
                        <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                    </Link>
                </li>
            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default SiteBar;
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import './AdminSitebar.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faSignOutAlt, faCalendar, faUsers, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons'

const AdminSidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false)
    useEffect(() => {
        fetch('http://localhost:5000/isAdmin', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [])
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled text-decoration-none">
                <li>
                    <Link to="/admin/orderList" className="text-white">
                        <FontAwesomeIcon icon={faShoppingCart} /> <span>Order List</span>
                    </Link>
                </li>
                {
                    isAdmin || <div>
                        <li>
                            <Link to="/admin/addService" className="text-white">
                                <FontAwesomeIcon icon={faCalendar} /> <span>Add Service</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/makeAdmin" className="text-white">
                                <FontAwesomeIcon icon={faCommentDots} /> <span>Make Admin</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/admin/manageService" className="text-white">
                                <FontAwesomeIcon icon={faCommentDots} /> <span>Manage Service</span>
                            </Link>
                        </li>

                    </div>
                }

            </ul>
            <div>
                <Link to="/" className="text-white"><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></Link>
            </div>
        </div>
    );
};

export default AdminSidebar;
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AdminSidebar from '../../Admin/Sidebar/AdminSidebar';

const ServiceList = () => {
    
    return (
        <section>
            <AdminSidebar></AdminSidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Add a Service</h5>
            
        </div>
        </section>
    );
};

export default ServiceList;
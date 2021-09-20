import React, { useEffect, useState } from 'react';
import ManageTable from '../ManageTable/ManageTable';
import AdminSidebar from '../Sidebar/AdminSidebar';

const ManageService = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setOrder(data)
            })
    }, [])
    const handleRemove = id => {
        fetch(`http://localhost:5000/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                window.location.reload()
                console.log(result)})
    }
    return (
        <section className="container-fluid row " >
        <AdminSidebar></AdminSidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">All Order</h5>
            <ManageTable order={order} handleRemove={handleRemove} ></ManageTable>
        </div>
    </section>
    );
};

export default ManageService;
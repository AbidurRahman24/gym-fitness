import React, { useEffect, useState } from 'react';
import OrderTable from '../OrderTable/OrderTable';
import AdminSidebar from '../Sidebar/AdminSidebar';

const OrderList = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setOrder(data)
            })
    }, [])
    return (
        <section className="container-fluid row " >
        <AdminSidebar></AdminSidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">All Order</h5>
            <OrderTable order={order} ></OrderTable>
        </div>
    </section>
    );
};

export default OrderList;
import React from 'react';

const ManageTable = ({order, handleRemove}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Order No</th>
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Pay With</th>
                <th className="text-secondary" scope="col">Cancel</th>
                </tr>
            </thead>
            <tbody>
                {
                  order.map((order, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{order.name}</td>
                        <td>{order.email}</td>
                        <td>{order.ServiceName}</td>
                        <td>Credit Card</td>
                        <td style={{cursor:'pointer'}} onClick={()=>handleRemove(order._id)}>Remove</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default ManageTable;
import React from 'react';

const ManageTable = ({service, handleRemove}) => {
    return (
        <table className="table table-borderless">
            <thead>
                <tr>
                <th className="text-secondary text-left" scope="col">Order No</th>
                <th className="text-secondary" scope="col">Title</th>
                <th className="text-secondary" scope="col">Email</th>
                <th className="text-secondary" scope="col">Description</th>
                <th className="text-secondary" scope="col">Cancel</th>
                </tr>
            </thead>
            <tbody>
                {
                  service.map((service, index) => 
                        
                    <tr>
                        <td>{index + 1}</td>
                        <td>{service.title}</td>
                        <td>{service.email}</td>
                        <td>{service.description}</td>
                        <td style={{cursor:'pointer'}} onClick={()=>handleRemove(service._id)}>Remove</td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    );
};

export default ManageTable;
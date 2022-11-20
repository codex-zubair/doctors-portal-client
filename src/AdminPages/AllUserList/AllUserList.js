import React from 'react';

const AllUserList = () => {
    return (
        <section>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
    
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                         
                        </tr>
                    </thead>
                    <tbody>
                  
                        <tr>
                            <th>1</th>
                            <td>Name</td>
                            <td>Email</td>
                            <td><button className='btn btn-warning'>Admin</button></td>
                          
                        </tr>
                      
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUserList;
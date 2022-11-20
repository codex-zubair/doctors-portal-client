import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { userAuthContext } from '../../Context/UserContext';

const AllUserList = () => {

    const { user } = useContext(userAuthContext);

    const { data: allUser ,refetch} = useQuery({
        queryKey: ['users', user], queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }
    })

    const deleteUserHandler = (id)=> {
        
        
        
        fetch(`http://localhost:5000/user/delete/${id}`,
        {
            method: 'DELETE',
        })
        .then(res=> res.json())
        .then(result =>  refetch())
        .catch(error=> console.log(error));
    }

  

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
                            <th>Delete User</th>

                        </tr>
                    </thead>
                    <tbody>

                        {allUser?.map((user,index) => <tr>
                            <th>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button className='btn btn-warning'>Admin</button></td>
                            <td><button onClick={()=> deleteUserHandler(user._id)} className='btn btn-error'>Delete</button></td>

                        </tr>)}

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUserList;
import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast, { Toaster } from 'react-hot-toast';
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

    // Delete user
    const deleteUserHandler = (id)=> {
        
        
        
        fetch(`http://localhost:5000/user/delete/${id}`,
        {
            method: 'DELETE',
        })
        .then(res=> res.json())
        .then(result =>  refetch())
        .catch(error=> console.log(error));
    }

    // Make an admin user
    const updateHandler = (id,email)=> {
        fetch(`http://localhost:5000/user/role/${id}`, 
        {
            method: 'PUT',
            headers: {email: email}
        }
        
        )
        .then(res=> res.json())
        .then(data=> {
            refetch()
            toast.error(data.unauthorized)
        })

 
    }

  

    return (
        <section>
        <Toaster></Toaster>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">

                    <thead>
                        <tr>
                            <th>Serial</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Permission</th>
                            <th>Role</th>
                            <th>Delete User</th>

                        </tr>
                    </thead>
                    <tbody>

                        {allUser?.map((currentUser,index) => <tr key={index}>
                            <th>{index+1}</th>
                            <td>{currentUser.name}</td>
                            <td>{currentUser.email}</td>
                            <td>{currentUser.role? currentUser.role: 'user'}</td>
                            <td><button onClick={()=> updateHandler(currentUser._id,user.email)} className='btn btn-warning'>Admin</button></td>
                            <td><button onClick={()=> deleteUserHandler(currentUser._id)} className='btn btn-error'>Delete</button></td>

                        </tr>)}

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUserList;
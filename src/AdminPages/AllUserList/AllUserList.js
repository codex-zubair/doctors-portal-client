import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { userAuthContext } from '../../Context/UserContext';

const AllUserList = () => {

    const { user } = useContext(userAuthContext);

    const { data: allUser } = useQuery({
        queryKey: ['users', user], queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            const data = await res.json();
            return data;
        }
    })

  

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

                        {allUser?.map((user,index) => <tr>
                            <th>{index+1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td><button className='btn btn-warning'>Admin</button></td>

                        </tr>)}

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AllUserList;
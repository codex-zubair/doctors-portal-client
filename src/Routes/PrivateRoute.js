import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { userAuthContext } from '../Context/UserContext';

const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {user} = useContext(userAuthContext);

    return (
        user?<div>
            {children}
        </div>
        :
        <Navigate to='/login' state={{from : location}} replace></Navigate>

    );
};

export default PrivateRoute;
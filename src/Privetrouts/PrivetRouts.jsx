import React, { Children, useContext } from 'react';
import AuthContext from '../Context/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRouts = ({children}) => {
const {user,loadeing} = useContext(AuthContext);
const location = useLocation();

if (loadeing) {
    return <span className="loading loading-infinity loading-lg"></span>
}
if (user) {
    return children;
}

    return <Navigate to={"/signin"} state={location?.pathname}></Navigate>
};

export default PrivetRouts;
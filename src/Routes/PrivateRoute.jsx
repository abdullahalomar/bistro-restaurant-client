import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import loader from '../../src/assets/loader.gif';


const PrivateRoute = ({ children }) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if (loading) {
        return <div className="flex justify-center items-center"><img src={loader} alt="" /></div>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;


import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if (loading) {
        return <p className="text-center mt-72"><span className="loading loading-spinner loading-lg text-secondary"></span></p>;
    }
    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
};

export default PrivateRoute;
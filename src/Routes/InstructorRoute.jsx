import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/UseAuth";
import UseUserRole from "../Hooks/UseUserRole";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";


const InstructorRoute = ({children}) => {
    const {user,loading} = useAuth();
    const [userRole,roleLoading] = UseUserRole();
    const location = useLocation();

    if(loading || roleLoading ){
        return <LoadingSpinner/>
    }
    if(user && userRole === 'instructor'){
        return children
    }
    
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default InstructorRoute;
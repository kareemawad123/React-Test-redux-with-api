import { Navigate, Outlet } from "react-router-dom";
import swal from "sweetalert";



const useAuth = () => {
    const user = { isLoggedIn: true }
    return user && user.isLoggedIn;
};


const ProtectedRoute = () => {
    const isAuth = useAuth();
    if (!isAuth) {
        swal("Oops...", "You Must Login!", "error");
        return <Navigate to="/login" />
    }else {
        return <Outlet/>
    }

}

export default ProtectedRoute;
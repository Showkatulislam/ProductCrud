import { Navigate } from "react-router-dom";
import UseAuth from "../context/UseAuth";


const PrivateRoute = ({children}) => {

    const {user,loading}=UseAuth()

    console.log(user);
    if(loading){
        return <p>loaddding </p>
    }
    if(user){
        return children
    }

    return <Navigate to="/auth"></Navigate>
};

export default PrivateRoute;
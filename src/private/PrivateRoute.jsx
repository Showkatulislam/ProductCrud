import { Navigate } from "react-router-dom";
import UseAuth from "../context/UseAuth";


const PrivateRoute = ({children}) => {

    const {user}=UseAuth()

    console.log(user);
    if(user){
        return children
    }

    return <Navigate to="/auth"></Navigate>
};

export default PrivateRoute;
import { useContext } from "react";
import { AuthContext } from "../assets/createContext/Contexts";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <>
            <div className="flex justify-center items-center h-screen">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-10 animate-spin fill-blue-600 block mx-auto"
                    viewBox="0 0 24 24">
                    <path
                        d="M12 22c5.421 0 10-4.579 10-10h-2c0 4.337-3.663 8-8 8s-8-3.663-8-8c0-4.336 3.663-8 8-8V2C6.579 2 2 6.58 2 12c0 5.421 4.579 10 10 10z"
                        data-original="#000000" />
                </svg>
            </div>
        </>
    }

    if (user) {
        return children;
    }

    return <Navigate to={'/sign-in'} state={location.pathname}></Navigate>
};

PrivateRoutes.propTypes = {
    children: PropTypes.node
}
export default PrivateRoutes;
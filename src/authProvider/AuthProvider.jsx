import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../assets/createContext/Contexts";
import PropTypes from 'prop-types';
import auth from "../firebaseConfig/firebase.config";

const AuthProvider = ({ children }) => {

    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {
        createNewUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}

export default AuthProvider;
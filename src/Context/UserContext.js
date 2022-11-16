import React, { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';



export const userAuthContext = createContext();

const UserContext = ({children}) => {

    // Auth setup
    const auth = getAuth(app)
    

    // normal sign up
    const emailSignUp = (email, password)=> {
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const userInfo = {emailSignUp}

    return (
        <userAuthContext.Provider value = {userInfo}>
            {children}
        </userAuthContext.Provider>
    );
};

export default UserContext;
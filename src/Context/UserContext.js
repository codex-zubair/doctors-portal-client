import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from '../Firebase/Firebase.config';



export const userAuthContext = createContext();

const UserContext = ({ children }) => {

    // Auth setup
    const auth = getAuth(app)


    // user state
    const [user, setUser] = useState({});


    // Google provider
    const provider = new GoogleAuthProvider();


    // !normal sign up
    const emailSignUp = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // !Login By Email
    const LoginByEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    // ! Login WIth Google
    const LoginWithGoogle = () => {
        return signInWithPopup(auth, provider)
    }



    //  !Sign out
    const logOut = () => {
        return signOut(auth)
            .then(data => console.log("logout success!"))
            .catch(error => console.log(error))
    }


    // !Observer
    useEffect(() => {
        const sub = onAuthStateChanged(auth, (currentUser) => {

            setUser(currentUser);

        })

        return () => sub

    }, [auth])








    const userInfo = { emailSignUp, LoginByEmail, user, logOut, LoginWithGoogle }

    return (
        <userAuthContext.Provider value={userInfo}>
            {children}
        </userAuthContext.Provider>
    );
};

export default UserContext;
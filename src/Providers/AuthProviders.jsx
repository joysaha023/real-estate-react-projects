import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, GoogleAuthProvider, signInWithPopup  } from "firebase/auth";
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const Googleprovider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, image) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: image
          })
    }

    const SignIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }

    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth, Googleprovider);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in unsubscribe', currentUser);
            setLoading(false);
            setUser(currentUser)
        });
        return () => {
            unSubscribe();
        }
    })






    const authInfo = {
        user,
        loading,
        createUser,
        SignIn,
        logOut,
        updateUserProfile,
        googleSignin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;
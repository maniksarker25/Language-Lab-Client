import { createContext, useEffect, useState } from "react";

import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // handle sign up
  const signUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // handle login
  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // handle google sign in
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  // update user profile
  const updateUserProfile = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  
  // find current user 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      setUser(currentUser);
      
    })
  },[]) 

  const authInfo = {
    user,
    signUp,
    logIn,
    googleSignIn,
    updateUserProfile
    
    
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

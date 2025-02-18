import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config";
import AuthContext from "./AuthContext";



const AuthProvider = ({children}) => {
      const [user, setUser] = useState('');
      const [loading, setLoading] = useState(true);
      const googleProvider = new GoogleAuthProvider();

      const createUser =(email, password)=>{
            setLoading(true);
            return createUserWithEmailAndPassword(auth, email, password);
      }

      const loginUser =(email, password)=>{
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
      }

      const googleLogin = ()=>{
            setLoading(true)
            return signInWithPopup(auth, googleProvider)
      }

      const logOut =()=>{
            setLoading(true);
            return signOut(auth);
      }

      useEffect(()=>{
          const unSubscribe = onAuthStateChanged(auth, currentUser =>{
                  setUser(currentUser);
                  setLoading(false)
                  console.log('observe', currentUser)
            });
            return ()=>{
                  unSubscribe();
            }
      }, []);


      const authInfo ={
            createUser,
            loginUser,
            logOut,
            googleLogin,
            user,
            loading,
      }

      return (
            <AuthContext.Provider  value={authInfo} >
                  {children}
            </AuthContext.Provider>
      );
};

export default AuthProvider;
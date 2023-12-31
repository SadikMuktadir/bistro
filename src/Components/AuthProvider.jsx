import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from "../../public/firebase.config";
import useAxiosPublic from "../Hooks/useAxiospublic";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signIn =(email,password)=>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if(currentUser){
        const userInfo ={email:currentUser.email};
        axiosPublic.post('/jwt',userInfo)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem('access-token',res.data.token);
          }
        })
      }
      else{
        localStorage.removeItem('access-token');
      }
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };
  const updateUser = (name,image)=>{
    return updateProfile (auth.currentUser,{
        displayName:name,
        photoURL:image
    });
  }

  const authInfo = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
    updateUser
  };
  return (
    <div>
      {<AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>}
    </div>
  );
};

export default AuthProvider;

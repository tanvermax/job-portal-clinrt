import { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import auth from "../../firebase.init";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
const googleprovider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadeing, setloading] = useState(true);

  const createuser = (email, password) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubcriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log("state capture", currentUser);
      setloading(false);
    });
    return () => {
      unsubcriber();
    };
  }, []);

  const loging=(email,password)=>{
    setloading(true);
    return signInWithEmailAndPassword(auth,email,password);
    
  }
  const signoutuser=()=>{
    return signOut(auth);
  }

  const signeithgoogle=()=>{
    setloading(true)
    return signInWithPopup(auth ,googleprovider)
  }
  const auhtinfo = {
    user,setUser,
    loadeing,signoutuser,
    createuser,loging,signeithgoogle
  };
  return (
    <AuthContext.Provider value={auhtinfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile
} from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import app from "../firebase";

app()

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({children}) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
        setError(false);
        setUser(user);
      } else {
        setLoading(false);
        setError(true);
      }
    });
    return unsubscribe
  }, []);

  async function createUser(name, email, password) {
    try {
      const auth = getAuth();
      const getUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (getUser) {
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then((res) => res.json())
          .catch((err) => console.log(err));
      }
      const findUser = auth.currentUser;
      setUser({
        ...findUser
      });
    } catch (err) {
      console.log(err);
    }
  }

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  const value = {
    createUser,
    user,
    login,
    logout,
  };
  
  return(
    <AuthContext.Provider value={value}>
        {!loading && children}
    </AuthContext.Provider>
  )
};

export default AuthProvider;

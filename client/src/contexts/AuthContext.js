import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase";

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [loading, setLoading] = useState(true);

  const signOut = () => {
    return auth.signOut(); 
  }
  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signUp = async (email, password, username, displayName) => {
    try {
      const uid = await (
        await auth.createUserWithEmailAndPassword(email, password)
      ).user.uid;
      const user = await fetch("http://localhost:5000/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          uid,
          email,
          password,
          username,
          displayName,
        }),
      });
      return user.json();
    } catch (error) {
      console.error(error);
      return "Error creating user";
    }
  };
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    login,
    signUp,
    signOut
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

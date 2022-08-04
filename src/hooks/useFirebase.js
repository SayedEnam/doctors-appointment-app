import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebase from "../Pages/Login/Firebase/Firebase.init";

//initialize firebase app
initializeFirebase();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState();

  const auth = getAuth();
  const googlSignInProvider = new GoogleAuthProvider();
  const registerUser = (email, password, name) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError();
        const newUser = { email, displayName: name };
        setUser(newUser);
        
        // save user to the database
        saveUser (email, name, 'POST');

        // send name to firebase after creation
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const loginUser = (email, password) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
      })
      .catch((error) => {
        setAuthError("User Email or Password is wrong");
        //setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //Sign In with Google
  const signInWithGoogle = () => {
    setIsLoading(true);
    signInWithPopup(auth, googlSignInProvider)
      .then((result) => {
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT')
        setAuthError("");
      })
      .catch((error) => {
        setAuthError("User Email or Password is wrong");
      })
      .finally(() => setIsLoading(false));
  };
  //observer user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);
  const logout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  }

  const saveUser = (email, displayName, method) =>{
    const user = {email, displayName}
    fetch("http://localhost:5000/users", {
      method: method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then();
  }
  return {
    user,
    isLoading,
    authError,
    registerUser,
    loginUser,
    signInWithGoogle,
    logout,
  };
};

export default useFirebase;

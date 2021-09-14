import React, { useContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

initializeApp(firebaseConfig);

const Login = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        photo: ''
    })

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };


    const provider = new GoogleAuthProvider();
    const handleSignIn = () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
            .then(res => {
                const { displayName, photoURL, email } = res.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setUser(signedInUser);
                setLoggedInUser(signedInUser)
                history.replace(from)

            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }

    const handleSignOut = () => {
        const auth = getAuth();
        signOut(auth)
            .then(res => {
                const signedOutUser = {
                    isSignedIn: false,
                    name: '',
                    email: '',
                    photo: ''
                }
                setUser(signedOutUser);
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
    }

    return (
        <div>
            {user.isSignedIn ? <button onClick={handleSignOut}>Sign Out</button> :
                <button onClick={handleSignIn}>Sign In</button>
            }
        </div>
    );
};

export default Login;
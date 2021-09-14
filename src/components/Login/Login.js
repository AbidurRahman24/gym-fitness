import React, { useContext, useState } from 'react';
import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'
initializeApp(firebaseConfig);

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));
const Login = () => {
    const classes = useStyles();
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
        <div className='d-flex justify-content-center align-items-center' style={{width: '100%', height:'600px'}}>
            {user.isSignedIn ? 
            
            <div>
                <i class="bi bi-google"></i>
                <Button variant="contained" color="primary" onClick={handleSignOut}> Sign Out </Button> 
            </div>:
            <div>
                <i class="bi bi-google"></i>
                <Button variant="contained" color="primary" onClick={handleSignIn}> Sign In </Button>
            </div>
            }
        </div>
    );
};

export default Login;
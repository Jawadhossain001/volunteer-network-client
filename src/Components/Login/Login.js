import React, { useContext } from 'react';
import { FormControl, FormGroup, Grid, Input, InputLabel } from '@material-ui/core';
import firebase from 'firebase';
import firebaseConfig from './firebase.config';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../App';
import google from '../../images/google.png';
import logo from '../../images/logo.png';
import './Login.css';

firebase.initializeApp(firebaseConfig);

const Login = () => {
  const [user, setUser] = useContext(UserContext)
  const history = useHistory()

  //sign in with google provider
  const googleSigninHandler = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(result => {
        setUser({ ...user, email: result.user.email, name: result.user.displayName, uid: result.user.uid, isSignedIn: true })
        history.location.state ? history.replace(history.location.state.pathname)
          : history.goBack()
      })
      .catch(error => console.log(error))
  }
  // token verify

  return (
    <div className="login">
      <FormGroup className="login-container">
        {
          user.isSignedUp ? <b style={{ textAlign: 'center' }}><h3>Login with</h3></b>
            : <b style={{ textAlign: 'center' }}><h3>Create an Account</h3></b>
        }
        <Grid container item justify='center' alignItems='center' onClick={googleSigninHandler}
          style={{ margin: 'auto', cursor: 'pointer', border: '1px solid lightgray', width: '270px', marginTop: '20px', borderRadius: "30px", padding: '0' }} >
          <Grid item>
            <img src={google} alt="" />
          </Grid>
          <Grid style={{ marginBottom: '5px', marginLeft: '10px', }} item >Continue with Google</Grid>
        </Grid>

        {
          user.isSignedUp ?
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
              Don't have an account?
            <span onClick={() => setUser({ ...user, isSignedUp: false })} className="create">
                Create an account
            </span>
            </div>
            : <div style={{ textAlign: 'center', marginTop: '10px' }}>
              Already have an account?
            <span onClick={() => setUser({ ...user, isSignedUp: true })} className="signIn">
                Signin
            </span>
            </div>
        }
      </FormGroup>
    </div>
  );
}

export default Login;

import './App.css';
import initalAuthentication from './Firebase/Firebase.initialize';
import { getAuth, signInWithPopup, GoogleAuthProvider, GithubAuthProvider, signOut } from "firebase/auth";
import { useState } from 'react';

initalAuthentication();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const auth = getAuth();

function App() {
  const [user, setUser] = useState({})

  const handleGoogleSignIn = () => {

    signInWithPopup(auth, googleProvider)
      .then(result => {
        const { displayName, email, photoURL } = result.user;
        const loggeduser = {
          name: displayName,
          email: email,
          photo: photoURL
        };
        setUser(loggeduser);
      })
      .catch(error => {
        console.log(error.message)
      })

  }

  const handleGithubSignIn = () => {

    signInWithPopup(auth, githubProvider)
      .then(result => {
        const { displayName, photoURL } = result.user;
        const loggeduser = {
          name: displayName,
          photo: photoURL
        }
        setUser(loggeduser)

      })
  }

  const hanedleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      })
  }


  return (
    <div className="App">

      <button onClick={handleGoogleSignIn}>Google Sign In</button>

      <button onClick={handleGithubSignIn}>Github sign in</button>

      <button onClick={hanedleSignOut}>Sign out</button>

      <div>
        {
          user.name && <div>
            <h1>{user.name}</h1>
            <h4>{user.email}</h4>
            <img src={user.photo} alt="" />
          </div>
        }

      </div>



    </div>
  );
}

export default App;

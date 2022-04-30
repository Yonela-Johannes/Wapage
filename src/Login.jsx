import {auth, provider} from './firebase-config'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import './blog.css'

function Login({setIsAuth}) {
  const navigate = useNavigate()

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate('/blog')
      })
    }

  return (
    <div className='login'>
        Login
        <p>Sign in with google</p>
        <button onClick={signInWithGoogle} className='login-with-google-btn'>Sign in with Google</button>
    </div>
  )
}

export default Login
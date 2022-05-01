import { Link } from 'react-router-dom'
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdOutlineAttachEmail } from "react-icons/md";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase-config'
import './styles.css'

function Navbar({ isAuth }) {
    console.log(isAuth)
    // sign out from blog
    const signout = () => {
        signOut(auth).then(() => {
            localStorage.clear()
            window.location.pathname = "/"
        })
    }
  return (
    <div className='topbar'>
        <div className='navbar'>
            <div className='wrapper'>
                <div className='navWrapperItems'>
                    <div className='itemContainer'>
                        <span><BsFillTelephoneOutboundFill className='icon phone' />
                        +067 356 4159</span>
                        <span><MdOutlineAttachEmail className='icon' />
                        johannesyonela@gmail.com</span>
                    </div>
                    <div className='itemContainer'>                      
                        <span>Currently: </span>
                        <span>Agile-Web-Developer at Codex</span>
                    </div>
                    <div className='itemContainer'>
                            <span>
                                {!isAuth ? (<Link to="/login">Sign in</Link>) : (<button onClick={signout} className='logout'>Sign out</button>)}
                            </span>
                        <span>Based in Cape Town</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Navbar
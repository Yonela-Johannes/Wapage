import React from 'react'
import './styles.css'
import { BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdOutlineAttachEmail } from "react-icons/md";


function Navbar() {
  return (
    <div className='navbar'>
        <div className='topbar'>
            <div className='wrapper'>
                <div className='navWrapperItems'>
                    <h1 className='logo'>Yonela</h1>
                    <div className='itemContainer'>
                        <BsFillTelephoneOutboundFill className='icon phone' />
                        <span>+067 356 4159</span>
                        <MdOutlineAttachEmail className='icon' />
                        <span>johannesyonela@gmail.com</span>
                    </div>
                    <div className='itemContainer'>                      
                        <span>Currently Agile-Web-Developer At Codex</span>
                    </div>
                    <div className='itemContainer'>
                        <span>Based in Cape Town</span>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}

export default Navbar
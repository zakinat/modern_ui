import React,{useState} from 'react'
import {RiMenu3Line,RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/logo.svg'


const Menu =({clsToggle})=>{
    return(
        <>
         <p><a href='#home'  onClick={clsToggle?()=>clsToggle(false):undefined}>Home</a></p>
         <p><a href='#wgpt3' onClick={clsToggle?()=>clsToggle(false):undefined}>What is gpt3</a></p>
         <p><a href='#possibility' onClick={clsToggle?()=>clsToggle(false):undefined}>Open AI</a></p>
         <p><a href='#features' onClick={clsToggle?()=>clsToggle(false):undefined}>Case Studies</a></p>
         <p><a href='#blog' onClick={clsToggle?()=>clsToggle(false):undefined}>Library</a></p>
        </>
    )
    
}

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className='navbar'>
            <div className='navbar__links'>
                <div className='navbar__links-logo'>
                    <a href='#home'><img src={logo}  alt='logo'/></a>
                </div>
                <div className='navbar__links-container'>
                   <Menu/>
                </div>
            </div>

            <div className='navbar__sign'>
                    <p>Sign in</p>
                    <button type="button">Sign up </button>
            </div>

            <div className='navbar__menu'>
                    {toggleMenu
                        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
                    {toggleMenu &&
                    (
                        <div className='navbar__menu-container scale-up-center'>
                            <div className='navbar__menu-container-links'>
                              <Menu clsToggle={setToggleMenu}/>
                              <div className='navbar__menu-container-links-sign'>
                                <p>Sign in</p>
                                <button type="button">Sign up </button>
                              </div>
                            </div>
                        </div>
                    )}
            </div>
        </div>
    )
}

export default Navbar

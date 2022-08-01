
import React from 'react'
import Logo from  '../images/logo.png'
const NavBar = () => {
  return (
    <>
       <div className='NavBar'>
      <nav className='navs'>
       <div>
       <ul className='navMains'>
    
        <li className='navItems'><a href='' style={{marginLeft:'-840px'}}>
            <img src={Logo} alt="logo" />
            </a></li> 
        <li className='navItems'><a href='/'>Home</a></li>
        <li className='navItems'><a href='/about'>About us</a></li>
        <li className='navItems'><a href='/faq'>FAQ</a></li>
        <li className='navItems'><a href='/contact'>Contact us</a></li>
            </ul>
       </div>
      </nav>
        </div> 
    </>
  )
}

export default NavBar
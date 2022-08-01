
import {React,useState} from 'react'
import Button from './Button'
import Input from './Input'
import Label from './Label'
import getPlay from '../images/getPlay.png'
import appStore from '../images/appStore.png'
import Logo from '../images/logo.png'

const Form = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
  return (
    <>
    <div className='formTitle'>
          <img src={Logo} alt='logo' style={{position:'relative',left:'27%',top:'-70%'}} />
          </div>
     <form method='post'>
      <div className='formContainer'>
        <div className='formItems'>
            <Label name="Name" className="labelA" />
            <Input name="email" value={name} className="email" onChange={e=>setName(e.target.value)} placeholder="Name" />
           <Label name="Email" className="labelA" />
            <Input name="email" value={email} className="email" onChange={e=>setEmail(e.target.value)} placeholder="Email" />
            <br/><br />
            <Label name="Password" className="labelB" />
            <Input name="password" value={password} className="password" onChange={e=>setPassword(e.target.value)} placeholder="Password" />
            
            <Button name="Sign Up" className="loginButton" />

            <div className='formP'>
                <p style={{marginTop:'75px'}}><a href='/Login'>Have an Account. Login here!</a></p>
            </div>
            <div style={{marginTop:'-6%'}}>
              <img src={getPlay} alt="playstore" width='170px' height='60px' style={{marginLeft:'-15px'}}/>
              <img src={appStore} alt="appStore" width='145px' height='40px' style={{position:'absolute' ,marginLeft:'-10px',marginTop:'10px'}}/>

            </div>
        </div>
      </div>
      </form>
    </>
  )
}

export default Form
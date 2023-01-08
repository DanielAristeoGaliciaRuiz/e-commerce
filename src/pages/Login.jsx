import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { loginUserThunk, logOutThunk } from '../store/slices/userInfo.slice'
import "./styles/Login.css"
const Login = () => {
  const {token,user}=useSelector(state=>state.userInfo)

  const {register,handleSubmit}=useForm()

  const dispatch=useDispatch()
  
  const submit=(data)=>{
   dispatch(loginUserThunk(data))
  }
  const handleClickLogOut=()=>{
    dispatch(logOutThunk())
  }

  return (
  <main className='login'>
    {
      token?(
        <section className='login-loged'>
          <i className='login-loged-icon bx bxs-user-circle'></i>
          <h3 className='login-loged-name'>{`${user.firstName} ${user.lastName} `}</h3>
          <button className='login-loged-btn' onClick={handleClickLogOut} >Logout</button>
        </section>
      ):(
        <form  className='login-form' onSubmit={handleSubmit(submit)}>
        <h3 className='login-title'>Welcome! Enter your email anda pasword to continue</h3>
        <div className='login-container-test'>
          <h4 className='login-test-title'>Test data</h4>
          <p className='login-test-email'>john@gmail.com</p>
          <p className='login-test-password'>john1234</p>
        </div>
        <div className='login-field'>
          <label className='login-label'>Email</label>
          <input className='login-input' type="email" {...register("email")} />
        </div>
        <div className='login-field'>
          <label className='login-label'>Pasword</label>
          <input className='login-input' type="password" {...register("password")} />
        </div>
        <button className='login-btn'>Loging</button>
        <p className='login-test-footer'>I don´t have and account <span>Sign up</span> </p>
      </form>
      )
    }
  </main>
  )
}

export default Login
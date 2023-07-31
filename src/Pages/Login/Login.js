import React from 'react'
import "./Login.css"
import { useSelector,useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useRef,useEffect} from 'react'
import { fetchUserDetails } from '../User/UserSlice'
const Login = () => {
  const navigater=useNavigate();
  const dispatch=useDispatch();
  const Username=useRef();
  const Userpassword=useRef();
   const userData=useSelector((state)=>state.user. UserDetails);
    const submit=(e)=>{
       e.preventDefault();
       const email=Username.current.value.trim();
       const password=Userpassword.current.value;
       if(email===""){
        alert("Please Enter the email");
        Username.current.focus();
       }else if(password===""){
        alert("Please Enter the password");
        Userpassword.current.focus();
       }else{
        dispatch(fetchUserDetails({
          username:email,
          password:password,
          expiresInMins: 60
        }))
       }
    }
    function goForUserPage(){
       if(userData && userData.id && userData.id !== ''){
        navigater("/user");
       }
    }

    useEffect(()=>{
      goForUserPage();
      // eslint-disable-next-line
  },[userData])
  return (
   <>
<div className="container login-page">
  <div className="card">
    <h2>Login Form</h2>
    <form>
      <label htmlFor="username">Username</label>
      <input ref={Username} type="text" id="username" placeholder="Enter your username"></input>

      <label htmlFor="password">Password</label>
      <input ref={Userpassword} type="password" id="password" placeholder="Enter your password"></input>

      <button type="submit" onClick={submit}>Login</button>
    </form>
  </div>
</div>
   </>
  )
}

export default Login
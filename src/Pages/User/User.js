import React from 'react';
import "./user.css"
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate } from 'react-router-dom';
import { clearUser } from './UserSlice';
import { useEffect } from 'react';

const User = () => {
const userData=useSelector((state)=>state.user.UserDetails)
const dispatch=useDispatch();
const navigate=useNavigate();
localStorage.setItem("user",JSON.stringify(userData));
const goLoginPage = () => {
    if ( userData &&  userData.id &&  userData.id !== "") {
    } else {
      navigate("/login");
    }
  };
  const logoutHandler = ()=>{
    dispatch(clearUser())
}
useEffect(() => {
    goLoginPage();
    // eslint-disable-next-line
  }, [userData]);
  return (
    <section className="" style={{background:"#F4f5f7"}}>
    <div className="container py-5 h-100">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col col-lg-6 mb-4 mb-lg-0">
          <div className="card mb-3"  style={{borderRadius:"0.5rem"}}>
            <div className="row g-0">
              <div className="col-md-4 user-gradient-custom text-center text-white"
                style={{borderTopLeftRadius:"0.5rem",borderBottomLeftRadius:"0.5rem"}}>
                <img src={`${userData.image}`}
                  alt="Avatar" className="img-fluid my-5" style={{width:"80px"}} />
                <strong>{
                    <div>
                          <h5>{userData?.firstName}</h5>
               <h5>{userData?.lastName}</h5>
                    </div>
             
                }</strong>
             
                <i className="far fa-edit mb-5"></i>
              </div>
              <div className="col-md-8">
                <div className="card-body p-4">
                  <h6>Information</h6>
                  <hr className="mt-0 mb-4"></hr>
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>User Name</h6>
                      <p className="text-muted">{userData.username}</p>
                    </div>
                    <div className="col-6 mb-3">
                      <h6>Email</h6>
                      <p className="text-muted">{userData.email}</p>
                    </div>
                  </div>
                  <h6>More information</h6>
                  <hr className="mt-0 mb-4"></hr>
                  <div className="row pt-1">
                    <div className="col-6 mb-3">
                      <h6>Gender</h6>
                      <p className="text-muted">{userData.gender}</p>
                    </div>
                    <div className="col-6 mb-3">
                    <button type="button" onClick={logoutHandler} className="btn btn-danger">Logout</button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-start">
                    <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                    <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default User
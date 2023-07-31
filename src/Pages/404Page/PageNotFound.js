import React from 'react'
import "./PageNotFound.css"
const PageNotFound = () => {
  return (
    <div className="container pageNotFound">
      <div className="gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className="content">
        <h1 className="main-heading">This page is gone.</h1>
        <p>
          ...maybe the page you're looking for is not found or never existed.
        </p>
        <a href="/" target="blank">
          <button>Back to home <i className="far fa-hand-point-right"></i></button>
        </a>
      </div>
    </div>
  )
}

export default PageNotFound
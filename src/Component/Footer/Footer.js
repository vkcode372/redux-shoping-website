import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-center text-white mt-5" style={
        {
            position:"absolute",
            width:"100%"
        }
    }>
      <div className="container p-4">
        <section className="mb-4">

          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://www.linkedin.com/in/vishal-vishwakarma-74546720a" role="button">
           <i className="fab fa-linkedin-in"></i>
      
          </a>
          <a className="btn btn-outline-light btn-floating m-1" target="_blank" href="https://github.com/vkcode372" role="button">
           <i className="fab fa-github"></i>
      
          </a>

          {/* Add other social media buttons here */}
        </section>

        <section>
          <form action="">
            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </div>

              <div className="col-md-5 col-12">
                <div className="form-outline form-white ">
                  <input type="email" id="form5Example21" className="form-control" />
                  <label className="form-label" htmlFor="form5Example21"></label>
                </div>
              </div>

              <div className="col-auto">
                <button type="submit" className="btn btn-outline-light mb-4">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </section>

        <section className="mb-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat
            quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum
            corrupti dicta, aliquam sequi voluptate quas.
          </p>
        </section>
      </div>

      <div className="text-center p-3 bg-black">
        © {new Date().getFullYear()} Copyright: Developed and Designed by vishal vishwakarma
      </div>
    </footer>
  );
};

export default Footer;

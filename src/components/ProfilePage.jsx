import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProfilePage = () => {
  return (
    <div className='bg-black'>
      <div className="container-fluid">
        <div className="navbar">
          <a href="./Page1.html">
            <img src="./assets/netflix_logo.png" alt="Netflix Logo" width="150px" />
          </a>
        </div>
      </div>
      <div className="container p-3 bg-black p-5 w-50 profile-container">
        <h1 className="text-white fs-1 h-100">Edit Profile</h1>
        <hr className="my-4" />
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3 text-md-start w-25">
            <div col-md-12>
              <img className="baby" src="./assets/avatar.png" alt="Avatar" width="160" />
            </div>
            <div className="pencil text-light border-light">
              <svg
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 122.88 122.88"
                style={{ enableBackground: 'new 0 0 122.88 122.88' }}
                xmlSpace="preserve"
              >
                <g>
                  <path
                    className="st0"
                    d="M61.44,0c33.93,0,61.44,27.51,61.44,61.44c0,33.93-27.51,61.44-61.44,61.44S0,95.37,0,61.44 C0,27.51,27.51,0,61.44,0L61.44,0z M52.56,84c-1.82,0.61-3.68,1.17-5.5,1.77c-1.82,0.61-3.64,1.21-5.5,1.82 c-4.34,1.4-6.71,2.19-7.23,2.33c-0.51,0.14-0.19-1.86,0.89-6.06l3.45-13.19l26.01-27.04l13.85,13.33L52.56,84L52.56,84L52.56,84z M78.48,33.84c-0.65-0.61-1.4-0.93-2.24-0.89c-0.84,0-1.59,0.33-2.19,0.98l-4.94,5.13l13.85,13.38l4.99-5.22 c0.61-0.61,0.84-1.4,0.84-2.24c0-0.84-0.33-1.63-0.93-2.19L78.48,33.84L78.48,33.84L78.48,33.84z"
                  />
                </g>
              </svg>
            </div>
          </div>

          <div className="col-12 col-md-8 col-lg-6"> 
            <div>
              <div>
                <button className="btnStrive text-white border border-0 w-100 my-4 py-2 fs-5">Strive Student</button>
              </div>
              <div className=''>
                <h3 className="text-light d-flex justify-content-start">Language:</h3>
                <div className="dropdown d-flex justify-content-start mt-3">
                  <button
                    className="btn btn-secondary dropdown-toggle rounded-0 bg-dark bg-transparent border border-white pe-4 pt-1 ps-4"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    English
                  </button>
                  <ul className="dropdown-menu dropdown-menu-dark">
                    <li><a className="dropdown-item" href="#">Spanish</a></li>
                    <li><a className="dropdown-item" href="#">German</a></li>
                    <li><a className="dropdown-item" href="#">Italian</a></li>
                  </ul>
                </div>
              </div>
              <hr className="mt-5" />
            </div>

            <div>
              <div>
                <h3 className="mb-4 fs-3 text-light d-flex justify-content-start">Maturity Settings:</h3>
                <button className=" btnMat text-white border-0 rounded pb-1 mb-2 d-flex justify-content-start ">ALL MATURITY RATINGS</button>
                <p className="text-light d-flex justify-content-start">Show titles of all maturity ratings for this profile</p>
                <button id="btnEdit" className="btn btn-transparent text-secondary border border-secondary rounded-0 d-flex justify-content-start ps-4">EDIT</button>
              </div>
              <hr className="my-4" />
            </div>

            <div className='col-md-12'>
              <h3 className="text-light d-flex justify-content-star ">Autoplay controls</h3>
              <form className="d-flex justify-content-start pt-3">
                <span id="checkBox" className="me-2">
                  <input type="checkbox" />
                </span>
                <label className="text-light pt-3" htmlFor="checkbox">Autoplay next episode in a series on all devices</label>
              </form>
              <form className='d-flex justify-content-start pt-3'>
                <span className="me-2">
                  <input type="checkbox" />
                </span>
                <label className="text-light me-4 pt-3" htmlFor="checkbox">Autoplay previews while browsing on all devices</label>
              </form>
            </div>
          </div>

          <div className="row w-75 mx-auto col-md-12">
            <hr className="my-4" />
            <div className="d-flex justify-content-around">
              <button id="btnP2" className="col-2 pt-2 pb-2 btn btn-transparent text-secondary border border-secondary rounded-0">SAVE</button>
              <button id="btnP2" className="col-2 pt-2 pb-2 btn btn-transparent text-secondary border border-secondary rounded-0">CANCEL</button>
              <button id="btnP2" className="col-5 pt-2 pb-2 btn btn-transparent text-secondary border border-secondary rounded-0">DELETE PROFILE</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

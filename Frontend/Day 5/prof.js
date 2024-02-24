import React from 'react';
import './prof.css';
const UserProfile = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-4 pb-5">
          {/* Account Sidebar */}
          <div className="author-card pb-3">
            <div
              className="author-card-cover"
              style={{
                backgroundImage: 'url(https://cdn1.vectorstock.com/i/1000x1000/31/95/user-sign-icon-person-symbol-human-avatar-vector-12693195.jpg)',
              }}
            >
              <a
                className="btn btn-style-1 btn-white btn-sm"
                href="#"
                data-toggle="tooltip"
                title=""
                data-original-title="You currently have 290 Reward points to spend"
              >
               
              </a>
            </div>
            <div className="author-card-profile">
              <div className="author-card-avatar">
                <h5 className="author-card-name text-lg">Daniel </h5>
                <span className="author-card-position">Joined February 06, 2017</span>
              </div>
            </div>
          </div>
          <div className="wizard">
            <nav className="list-group list-group-flush">
              <a className="list-group-item" href="#">
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <i className="fe-icon-shopping-bag mr-1 text-muted"></i>
                    <div className="d-inline-block font-weight-medium text-uppercase">Name</div>
                  </div>
                  <span className="badge badge-secondary">Daniel</span>
                </div>
              </a>
              <a className="list-group-item active" href="#">
                <i className="fe-icon-user text-muted"></i>Edit
              </a>
              <a className="list-group-item" href="#">
                <i className="fe-icon-map-pin text-muted"></i>
              </a>
              <a
                className="list-group-item"
                href="https://www.bootdey.com/snippets/view/bs4-wishlist-profile-page"
                target="__blank"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <i className="fe-icon-heart mr-1 text-muted"></i>
                    <div className="d-inline-block font-weight-medium text-uppercase"></div>
                  </div>
                  <span className="badge badge-secondary"></span>
                </div>
              </a>
              <a
                className="list-group-item"
                href="https://www.bootdey.com/snippets/view/bs4-account-tickets"
                target="__blank"
              >
                <div className="d-flex justify-content-between align-items-center">
                  <div>
                    <i className="fe-icon-tag mr-1 text-muted"></i>
                    <div className="d-inline-block font-weight-medium text-uppercase"></div>
                  </div>
                  <span className="badge badge-secondary"></span>
                </div>
              </a>
            </nav>
          </div>
        </div>
        {/* Profile Settings */}
        <div className="col-lg-8 pb-5">
          <form className="row">
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="account-fn">First Name</label>
                <input className="form-control" type="text" id="account-fn" value="Daniel" required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="account-ln">Last Name</label>
                <input className="form-control" type="text" id="account-ln" value="Adams" required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="account-email">E-mail Address</label>
                <input
                  className="form-control"
                  type="email"
                  id="account-email"
                  value="daniel.adams@example.com"
                  disabled
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="account-phone">Phone Number</label>
                <input className="form-control" type="text" id="account-phone" value="+7 (805) 348 95 72" required />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="account-pass">New Password</label>
                <input className="form-control" type="password" id="account-pass" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="account-confirm-pass">Confirm Password</label>
                <input className="form-control" type="password" id="account-confirm-pass" />
              </div>
            </div>
            <div className="col-12">
              <hr className="mt-2 mb-3" />
              <div className="d-flex flex-wrap justify-content-between align-items-center">
                <div className="custom-control custom-checkbox d-block">
                  <input className="custom-control-input" type="checkbox" id="subscribe_me" checked />
                  <label className="custom-control-label" htmlFor="subscribe_me">
                    Subscribe me to Newsletter
                  </label>
                </div>
                <button
                  className="btn btn-style-1 btn-primary"
                  type="button"
                  data-toast=""
                  data-toast-position="topRight"
                  data-toast-type="success"
                  data-toast-icon="fe-icon-check-circle"
                  data-toast-title="Success!"
                  data-toast-message="Your profile updated successfully."
                >
                  Update Profile
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

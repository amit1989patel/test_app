import React, { Component } from 'react';


class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="card">
            <h5 className="card-header info-color white-text text-center py-4">
              <strong>Sign up</strong>
            </h5>
            {/*Card content*/}
            <div className="card-body px-lg-5 pt-0">
              {/* Form */}
              <form className="text-center" style={{color: '#757575'}}>
                <div className="form-row">
                  <div className="col">
                    {/* First name */}
                    <div className="md-form">
                      <input type="text" id="materialRegisterFormFirstName" className="form-control" />
                      <label htmlFor="materialRegisterFormFirstName">First name</label>
                    </div>
                  </div>
                  <div className="col">
                    {/* Last name */}
                    <div className="md-form">
                      <input type="email" id="materialRegisterFormLastName" className="form-control" />
                      <label htmlFor="materialRegisterFormLastName">Last name</label>
                    </div>
                  </div>
                </div>
                {/* E-mail */}
                <div className="md-form mt-0">
                  <input type="email" id="materialRegisterFormEmail" className="form-control" />
                  <label htmlFor="materialRegisterFormEmail">E-mail</label>
                </div>
                {/* Password */}
                <div className="md-form">
                  <input type="password" id="materialRegisterFormPassword" className="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" />
                  <label htmlFor="materialRegisterFormPassword">Password</label>
                  <small id="materialRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                    At least 8 characters and 1 digit
                  </small>
                </div>
                {/* Phone number */}
                <div className="md-form">
                  <input type="password" id="materialRegisterFormPhone" className="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock" />
                  <label htmlFor="materialRegisterFormPhone">Phone number</label>
                  <small id="materialRegisterFormPhoneHelpBlock" className="form-text text-muted mb-4">
                    Optional - for two step authentication
                  </small>
                </div>
                {/* Newsletter */}
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="materialRegisterFormNewsletter" />
                  <label className="form-check-label" htmlFor="materialRegisterFormNewsletter">Subscribe to our newsletter</label>
                </div>
                {/* Sign up button */}
                <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>
                {/* Social register */}
             
              </form>
              {/* Form */}
            </div>
          </div>
        )
    }

}
export default Signup;
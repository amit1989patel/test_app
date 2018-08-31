import React, { Component } from 'react';
import '../style.css';



class ForgetPassword extends Component {
    render() {
        console.log("inside forgetpassword")
        return (
          
      <div className="login-box">
      {/* <div className="login-logo login-heading">
        <img src="../../../assets/images/logo.png" />
      </div> */}
      <div className="login-box-body login-panel panel panel-default">
        <div className="panel-heading">
          <p className="panel-title">Forgot Your Password?</p>
        </div>
        <div className="panel-body">
          <form>
            <div className="form-group has-feedback">
              <input type="email" name="email" formcontrolname="email" className="form-control" id="email" placeholder="E-mail" />
              <span className="glyphicon glyphicon-envelope form-control-feedback" />
                         </div>
            <div className="row">
              <div className="col-xs-3">
                <button type="submit" className="btn btn-lg btn-primary">Submit</button>
              </div>
              <div className="col-xs-3">
                <button className="btn btn-lg btn-info">Cancel</button>
              </div>
            </div>
            <br />
          </form>
        </div>
      </div>
    </div>
    
    );
    }
}

export default ForgetPassword;

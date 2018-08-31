import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
// import { Navbar, Switch, BrowserRouter, Link } from "react-router-dom";
import '../bootstrap-4.1.3/dist/css/bootstrap.min.css';

class Dahboard extends Component {
  render() {
    return (
      <div className="App container-fluid">
        <div className="row">
          <div className="col-md-2">
            <div className="side-bar">
              {/* <Link to="/registration">Add_Details</Link>             */}
              <div class="sidebar">
                <a href="/"><i class="fa fa-fw fa-home"></i> Home</a>
                <a href="/registration"><i class="fa fa-fw fa-wrench"></i> Add_Data</a>
                <a href="details"><i class="fa fa-fw fa-user"></i> Show_Data</a>
                {/* <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Contact</a> */}
              </div>
            </div>
          </div>
          <div className="col-md-10 custom_margin">
            <div className="body-content">
              <header className="App-header">
                <h1 className="App-title">Welcome</h1>
              </header>
              {/* <BrowserRouter>
                <Switch>
                <Route exact
                            path='/'
                            component={Login} */}
                        />
                        {/* <Route exact
                            path='/dashboard'
                            component={App}
                        /> */}

                  {/* <Route exact
                    path='/forgotpassword'

                    component={ForgetPassword}
                  />
                  <Route exact
                    path='/registration'

                    component={Signup}
                  />


                </Switch>
              </BrowserRouter> */}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Dahboard;

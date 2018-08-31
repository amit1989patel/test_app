import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { Navbar, Switch, BrowserRouter, Link } from "react-router-dom";
import './style.css';
import './bootstrap-4.1.3/dist/css/bootstrap.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {
  Router,
  Route,
  Switch,
  BrowserRouter
} from 'react-router-dom';
import ForgetPassword from './Components/Forgot_Password'
import Signup from './Components/Signup';
import Login from './Components/Login';
import Dashboard from './Components/Dashboard'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLoginForm: false,
      username: '',
      password: '',
    }
  }
  handleClick =(event) => {
    this.setState({showLoginForm:true})
  }
  render() {
    return (

      <div className="App container-fluid">
        {this.state.showLoginForm ?
         
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
                <BrowserRouter>
                  <Switch>
                    {/* <Route exact
                            path='/'
                            component={Login}
                        /> */}
                    <Route exact
                      path='/dashboard'
                      component={Dashboard}
                    />

                    <Route exact
                      path='/forgotpassword'

                      component={ForgetPassword}
                    />
                    <Route exact
                      path='/registration'

                      component={Signup}
                    />


                  </Switch>
                </BrowserRouter>
              </div>

            </div>
          </div>:
           <div >

           <MuiThemeProvider>
             {/* <div> */}
             <AppBar
               title="Login"
             />
             <div className="container-fluid">
               <div className="row">
                 <div className="col-sm-4">
                 </div>
                 <div className=" col-sm-4 form-field">
                   <TextField
                     hintText="Enter your Username"
                     floatingLabelText="Username"
                     onChange={(event, newValue) => this.setState({ username: newValue })}
                   />
                   <br />
                   <TextField
                     type="password"
                     hintText="Enter your Password"
                     floatingLabelText="Password"
                     onChange={(event, newValue) => this.setState({ password: newValue })}
                   />
                   <br />
                   <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
                 </div>
               </div>
             </div>
           </MuiThemeProvider>


         </div> 
        }
      </div>


    );
  }
  
}
const style = {
  margin: 15,}

export default App;

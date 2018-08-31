import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { createBrowserHistory } from 'history';
import {
    Router,
    Route,
    Switch
} from 'react-router-dom';
import Login from './Components/Login'
import ForgetPassword from './Components/Forgot_Password'
import Signup from './Components/Signup'

// import indexRoutes from './routes/index.jsx';

// const hist = createBrowserHistory();

// ReactDOM.render(
//     <Router history={hist}>
//         <Switch>                         
             
//                          <Route exact
//                             path='/'
//                             component={Login}
//                         />
                        
//                         <Route exact
//                             path='/dashboard'
//                             component={App}
//                         />
//                         <Route exact
//                             path='/forgotpassword'
                          
//                             component={ForgetPassword}
//                             /> 
//                             <Route exact
//                             path='/registration'
                          
//                             component={Signup}
//                             /> 
                                                 
        
                                          
                 
//         </Switch>
//     </Router>
//     , document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

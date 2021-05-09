import { Component, Suspense, lazy} from 'react';
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';


import routes from './routes';
import {authOperations} from './redux/auth'

import AppBar from './components/AppBar'

import './styles.css';



const HomeView = lazy(()=> import('./views/HomeView' /* webpackChunkName: "home-page" */));
const RegisterView = lazy(()=> import('./views/RegisterView' /* webpackChunkName: "register-page" */));
const LoginView = lazy(()=> import ('./views/LoginView') /* webpackChunkName: "login-page" */);
const ContactsView = lazy(()=> import ('./views/ContactsView' /* webpackChunkName: "contacts-page */));
const NotFoundView = lazy(()=> import ('./views/NotFoundView' /* webpackChunkName: "not-found-page */));




class App extends Component {
  componentDidMount (){
    this.props.onRefreshUser();
  }
  render() {
    return (
      <div className="container">
        <AppBar/>
         <Suspense fallback = {<h1>Loading...</h1>}>
        <Switch>
          <Route path={routes.home} exact component={HomeView} />
          <RegisterView path={routes.register} component={RegisterView} />
          <LoginView path={routes.login} component={LoginView} />
          <ContactsView path={routes.contacts} component={ContactsView} />
          <Route component = {NotFoundView}/>
         
        </Switch>
        </Suspense>

       
      </div>
    );
  }
}

const mapDispatchToProps = {
   
  onRefreshUser: authOperations.getCurrentUser,

}

export default connect(null, mapDispatchToProps)(App);
// const mapDispatchToProps = dispatch => ({
//   onSubmit: data => dispatch(contactsOperations.addContact(data)),
// });
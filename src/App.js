import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import{Suspense, lazy} from 'react';

import routes from './routes';

import AppBar from './components/AppBar'

import './styles.css';

// import HomeView from './views/HomeView';
// import RegisterView from './views/RegisterView';
// import LoginView from './views/LoginView';
// import ContactsView from './views/ContactsView';
// import NotFoundView from './views/NotFoundView';

// import ContactForm from './components/ContactForm';
// import ContactList from './components/ContactList';
// import Filter from './components/Filter';

const HomeView = lazy(()=> import('./views/HomeView' /* webpackChunkName: "home-page" */));
const RegisterView = lazy(()=> import('./views/RegisterView' /* webpackChunkName: "register-page" */));
const LoginView = lazy(()=> import ('./views/LoginView') /* webpackChunkName: "login-page" */);
const ContactsView = lazy(()=> import ('./views/ContactsView' /* webpackChunkName: "contacts-page */));
const NotFoundView = lazy(()=> import ('./views/NotFoundView' /* webpackChunkName: "not-found-page */));




class App extends Component {
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

        {/* <h1 className="title">Phonebook</h1>
        <ContactForm />
        <Filter />
        <ContactList /> */}
      </div>
    );
  }
}

export default App;

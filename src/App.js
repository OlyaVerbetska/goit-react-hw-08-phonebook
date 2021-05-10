import { Component, Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import routes from './routes';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import { authOperations } from './redux/auth';
import AppBarMy from './components/AppBarMy';

import './styles.css';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-page" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-page" */),
);
const LoginView = lazy(
  () => import('./views/LoginView') /* webpackChunkName: "login-page" */,
);
const ContactsView = lazy(() =>
  import('./views/ContactsView' /* webpackChunkName: "contacts-page */),
);
const NotFoundView = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "not-found-page */),
);

class App extends Component {
  componentDidMount() {
    this.props.onRefreshUser();
  }
  render() {
    return (
      <div className="container">
        <AppBarMy />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path={routes.home} exact component={HomeView} />
            <PublicRoute path={routes.register} component={RegisterView} redirectTo = {routes.contacts} restricted/>
            <PublicRoute path={routes.login} component={LoginView} redirectTo = {routes.contacts} restricted/>
            <PrivateRoute path={routes.contacts} component={ContactsView} redirectTo = {routes.login}/>
            <Route component={NotFoundView} />
          </Switch>
        </Suspense>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRefreshUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);

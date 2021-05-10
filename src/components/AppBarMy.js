import routes from '../routes';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import { authSelectors } from '../redux/auth';

import UserMenu from './UserMenu';
// import '../../src/styles.css';
//styles
//import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const AppBarMy = ({ isAuth }) => (
  <Toolbar position = "relative"  >
    {isAuth ? (
      <UserMenu />
    ) : (
      <ul>
        {' '}
   
        <NavLink
          to={routes.register}
          className="linkHome"
          activeClassName="active-linkHome"
        >
          Register
        </NavLink>


      
        <NavLink
          to={routes.login}
          className="linkHome"
          activeClassName="active-linkHome"
        >
          Login
        </NavLink>
      </ul>
    )}

    {isAuth && (
      <NavLink
        to={routes.contacts}
        className="linkHome"
        activeClassName="active-linkHome"
      >
        Contacts
      </NavLink>
    )}
  </Toolbar>
);

const mapStateToProps = state => ({
  isAuth: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBarMy);

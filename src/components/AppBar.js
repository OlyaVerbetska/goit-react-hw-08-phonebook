import routes from '../routes';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

import {authSelectors} from '../redux/auth'

import UserMenu from '../components/UserMenu';
import '../../src/styles.css'


const AppBar = ({isAuth}) => (
  <div className = "AppBar">

   
 {isAuth ?  <UserMenu/> : (<ul> <NavLink to={routes.register}  className="linkHome"  activeClassName="active-linkHome" >
        Register
      </NavLink>
      <NavLink to={routes.login}  className="linkHome" activeClassName="active-linkHome" >
        Login
      </NavLink></ul>)}  

    <ul>
   
      <NavLink to={routes.contacts}  className="linkHome" activeClassName="active-linkHome" >
        Contacts
      </NavLink>

    </ul>
    </div>
);

const mapStateToProps = (state) => ({
  isAuth: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);

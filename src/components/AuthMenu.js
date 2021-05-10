import routes from '../routes';
import { NavLink } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const AuthMenu = ({ userMail, onLogout }) => (
  <Toolbar
    style={{
      backgroundColor: 'Orchid',
      justifyContent: 'flex-end',
    }}
  >
    <Toolbar>
      {' '}
      <NavLink to={routes.register} className = "linkHome" activeClassName="active-linkHome">
        Register
      </NavLink>
      <NavLink to={routes.login}className = "linkHome"  activeClassName="active-linkHome">
        Login
      </NavLink>
    </Toolbar>
  </Toolbar>
);
export default AuthMenu;
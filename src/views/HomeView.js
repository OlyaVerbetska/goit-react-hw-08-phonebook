import routes from '../routes';
import { NavLink } from 'react-router-dom';

const HomeView = () => (
  <>
    <h1>Home Page</h1>
    <ul>
      <NavLink to={routes.register}  className="linkHome"  activeClassName="active-linkHome" >
        Register
      </NavLink>
      <NavLink to={routes.login}  className="linkHome" activeClassName="active-linkHome" >
        Login
      </NavLink>
      <NavLink to={routes.contacts}  className="linkHome" activeClassName="active-linkHome" >
        Contacts
      </NavLink>
    </ul>
  </>
);

export default HomeView;

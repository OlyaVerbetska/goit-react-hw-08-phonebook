import { NavLink } from 'react-router-dom';
import routes from '../routes';

const HomeView = () => (
    <div>
  
    <h1>Home Page</h1>
    <p>To access the functionality of this application, please <NavLink to={routes.login}className = "linkHome"  activeClassName="active-linkHome">
login
</NavLink> or <NavLink to={routes.register} className = "linkHome" activeClassName="active-linkHome">
register
</NavLink></p>
    </div>
 
);

export default HomeView;

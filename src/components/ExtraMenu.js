import routes from '../routes';
import MenuList from '@material-ui/core/MenuList';
import Link from '@material-ui/core/Link';
import Toolbar from '@material-ui/core/Toolbar';
import { NavLink } from 'react-router-dom';




const ExtraMenu = () => (
    <Toolbar style={{
        backgroundColor: 'transparent',
        
      }}>
        <NavLink
          
          to={routes.contacts}
        //   className="linkHome"
          activeClassName="active-linkExtra"
        >
          Contacts
        </NavLink>
        <NavLink
          to={routes.home}
        //   className="linkHome"
        activeClassName="active-linkExtra"        >
          Photos
        </NavLink>
      </Toolbar>
  );

  export default ExtraMenu;
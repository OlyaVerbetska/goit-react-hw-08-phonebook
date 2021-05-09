import '../../src/styles.css';
import { connect } from 'react-redux';
import {authSelectors, authOperations} from '../redux/auth'




const UserMenu = ({userMail, onLogout}) => (
  <div>
    <span className="user-menu">{userMail} </span>
    <button type = "button" className="user-menu" onClick = {onLogout} >Logout</button>
  </div>
);

const mapStateToProps = state => ({
    userMail:authSelectors.getMail(state)
})

const mapDispatchToProps = dispatch => ({
    onLogout: data => dispatch(authOperations.logOut(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);

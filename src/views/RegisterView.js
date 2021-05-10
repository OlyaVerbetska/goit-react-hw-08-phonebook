import { Component } from 'react';
import { connect } from 'react-redux';
import {authOperations} from '../redux/auth';
// styles


  //=================================

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1 className="title">Register Page</h1>

        <form
          onSubmit={this.handleSubmit}
        //  className={classes.form}
          autoComplete="off"
        >
          <label className="form-field">
            Name
            <input
              className="form-field"
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

          <label className="form-field">
            Email
            <input
              className="form-field"
              type="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className="form-field">
            Password
            <input
              className="form-field"
              type="text"
              name="password"
              placeholder="Create password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" className="form-field">
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
//  onRegister: data => dispatch(authOperations.register(data)),
 onRegister:authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterView);

import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1 className="title">Login Page</h1>

        <form
          onSubmit={this.handleSubmit}
          // style={styles.form}
          autoComplete="off"
        >
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
              placeholder="Enter your password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit" className="form-field">
            Login
          </button>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);

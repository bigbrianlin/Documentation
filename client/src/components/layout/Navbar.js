import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useAuth, logout } from '../../context/auth/AuthState';

const Navbar = ({ title, icon }) => {
  const [authState, authDispatch] = useAuth();
  const { isAuthenticated, user } = authState;

  const onLogout = () => {
    logout(authDispatch);
  };

  const authLinks = (
    <Fragment>
      <li>
        <Link to='/'>Shared</Link>
      </li>
      <li>
        <Link to='/department'>Department</Link>
      </li>
      <li>
        <Link to='/user'>User</Link>
      </li>
      <li>
        <Link to='/new'>New</Link>
      </li>
      <li>
        <Link onClick={onLogout} to='/login'>
          <i className='fas fa-sign-out-alt' />{' '}
          <span className='hide-sm'>Logout</span>
        </Link>
      </li>
      <li>Hello {user && user.name}</li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to='/'>Shared</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className='navbar bg-primary'>
      <h1>
        <Link to='/'>
          <i className={icon} /> {title}
        </Link>
      </h1>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};

Navbar.protoTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: 'TSMC',
  icon: 'fas fa-id-card-alt',
};

export default Navbar;

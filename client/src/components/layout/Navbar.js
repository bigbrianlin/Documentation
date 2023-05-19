import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <div class='nav-wrapper'>
        <a href='#' class='brand-logo'>
          TSMC
        </a>
        <ul id='nav-mobile' class='right hide-on-med-and-down'>
          <li>
            <a href='/'>Shared</a>
          </li>
          <li>
            <a href='/department'>Department</a>
          </li>
          <li>
            <a href='/user'>User</a>
          </li>
          <li>
            <a href='/new'>New</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

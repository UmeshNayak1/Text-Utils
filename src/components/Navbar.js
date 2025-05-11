import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} sticky-top shadow-sm`}
      style={{ transition: 'background-color 0.3s ease' }}
    >
      <div className="container-fluid px-4">
        <span className="navbar-brand fw-bold fs-4">{props.title}</span>

        <div className="form-check form-switch d-flex align-items-center ms-auto">
          <input
            className="form-check-input me-2"
            onClick={props.toggleMode}
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault"
            style={{ cursor: 'pointer' }}
          />
          <label
            className={`form-check-label text-${props.mode === 'light' ? 'dark' : 'light'} fw-semibold`}
            htmlFor="flexSwitchCheckDefault"
            style={{ cursor: 'pointer' }}
          >
            {props.mode === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
          </label>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  toggleMode: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: 'Welcome to Text Utils',
};

import React from 'react';
import PropTypes from 'prop-types';

function Alert(props) {
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type.charAt(0).toUpperCase() + props.alert.type.slice(1)}</strong>: {props.alert.msg}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
  );
}

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string.isRequired,
    msg: PropTypes.string.isRequired
  })
};

export default Alert;

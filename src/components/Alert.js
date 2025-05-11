import React from 'react'
import PropTypes from 'prop-types'

function Alert(props) {
  return (
   
     props.alert && <div className={`alert alert-&{props.alerts.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.type}</strong>: {props.alert.msg}
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
   
  )
}

export default Alert

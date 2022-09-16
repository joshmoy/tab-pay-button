import React from 'react'
import './style.css'

const Button = (props) => {
  return (
    <div className="tab_payment_button_container" style={props.containerStyle}>
      <button className="tab_payment_button" style={props.buttonStyle}>
        {props.text || "Pay now"}
      </button>
    </div>
  );
}

export default Button

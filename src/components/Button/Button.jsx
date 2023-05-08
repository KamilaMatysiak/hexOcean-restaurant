import React from 'react'
import './Button.scss'

const Button = ({buttonText}) => {
  return (
    <button className="button" type="submit">
        {buttonText}
    </button>
  )
}

export default Button
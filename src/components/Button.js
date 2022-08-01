import React from 'react'

export const Button = ({className, name}) => {
  return (

    <div>
      <button className={className}>{name}</button>
    </div>
  )
}

export default Button;
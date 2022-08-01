
import React from 'react'

const Input = ({name,placeholder,type,className,onChange,style,icon}) => {
  return (
    <>
     <input 
     type={type} name={name} 
     placeholder={placeholder}
      className={className} 
      onChange={onChange}  
      style={style}
      icon={icon} />
    </>
  )
}

export default Input
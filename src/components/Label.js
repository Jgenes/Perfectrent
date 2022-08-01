

import React from 'react'

const Label = ({name, className}) => {
  return (
    <>
        <label className={className}>
            {name}
        </label>
    </>
  )
}

export default Label
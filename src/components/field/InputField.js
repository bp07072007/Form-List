import React from 'react'

const InputField = ({ type, value, name, onChange }) => {
  return (
    <input type={type} required value={value} name={name} onChange={onChange} />
  )
}

export default InputField
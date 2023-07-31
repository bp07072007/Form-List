import React, { useState } from 'react'
import Form from './Form'
import FormList from './FormList'

const HandleForms = () => {
  const [userData, setUserData] = useState([])
  return (
    <div style={{ width: '50%', margin: '0 auto' }}>
      <Form userData={userData} setUserData={setUserData} />
      <FormList userData={userData} setUserData={setUserData} />
    </div>
  )
}

export default HandleForms
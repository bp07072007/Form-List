import React, { Fragment, useState } from 'react'
import InputField from './field/InputField';
import Button from './field/Button';

const Form = ({ userData, setUserData }) => {
  const [nameNumber, setNameNumber] = useState({ name: '', number: '',action:'' });

  const handleChange = (event) => {
    setNameNumber({ ...nameNumber, [event.target.name]: event.target.value })
  }

  const onSubmit = (event) => {
    event.preventDefault();
    setUserData([...userData, nameNumber]);
    setNameNumber({ name: '', number: '' });
  }
  return (
    <Fragment>
      <h1>Form</h1>
      <form method='post' onSubmit={(event) => onSubmit(event)}>
        <div>
          <InputField type="text" value={nameNumber.name} name='name' onChange={(event) => handleChange(event)} />
        </div>
        <div><InputField type="text" value={nameNumber.number} name='number' onChange={(event) => handleChange(event)} />
        </div>
        <div>
          <Button type='submit' value={'Save'} />
        </div>
      </form>
    </Fragment>
  )
}

export default Form
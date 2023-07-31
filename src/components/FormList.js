import React, { Fragment } from 'react'
import Button from './field/Button';

const FormList = ({ userData, setUserData }) => {
  const handleDelete = (index) => {
    setUserData(userData.filter((data, indexInner) => index !== indexInner));
  }
  return (
    <Fragment>
      <h2>User List</h2>
      <table style={{ width: '100%', textAlign: 'center' }}>
        <thead>
          <tr>
            <th scope='col'>S.No</th>
            <th scope='col'>Name</th>
            <th scope='col'>Number</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {!userData.length ?
            <tr>
              <td colSpan="4">No Data Found!!</td>
            </tr>
            :
            userData.map((data, index) => <tr key={index}>
              <td>{index + 1}</td>
              <td>{data.name}</td>
              <td>{data.number}</td>
              <td>
                <Button type='button' value={'Delete'} onClick={() => handleDelete(index)} />
              </td>
            </tr>)}
        </tbody>
      </table>
    </Fragment>
  )
}

export default FormList
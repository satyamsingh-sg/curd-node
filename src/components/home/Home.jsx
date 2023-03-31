import React, { useState, useEffect } from 'react'
import { userService } from '../../services/user.service';
import Update from '../update/Update';

const Home = () => {
  const [data, setData] = useState([]);

  const fetchData = async()=> {
    setData(await userService.user.getAll());
  }

  useEffect(() => {
    fetchData();
  },[]);

  const handleDelete = async (id, e) => {
    const response = await userService.user.delete(id)
    if (response) {
      document.getElementById(id).parentElement.parentElement.remove()
    }
  }

  const handleUpdate = () => {
    fetchData();
  }



  return (
    <div>
      <h1>USER DATA</h1>
      <table className='table'>
        <thead>
          <th>Name</th>
          <th>Email</th>
          <th>Delete</th>
          <th>Edit</th>
        </thead>
        <tbody>
          {data.map(user => (
            <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td><button id={user._id} onClick={(e) => handleDelete(user._id, e)} className="btn btn-primary" >delete</button></td>
              <td><Update id = {user._id} name= {user.name} email = {user.email} onupdate = {handleUpdate}/></td>
            </tr>

          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Home



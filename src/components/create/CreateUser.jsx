import React, { useState } from 'react';
import { userService } from '../../services/user.service';

const CreateUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name, email };
    const response = await userService.user.create(data);
    if (response) {
      console.log(response)
      alert("New User created "+ data.name)
    }
  };

  return (
    <div>
      <h1>Create User</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group col-md-4">
          <input type="name" className="form-control"  placeholder="Name" onChange={(e) => setName(e.target.value)} value={name} required/>
        </div>
        <div className="form-group col-md-4">
          <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} required/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CreateUser;

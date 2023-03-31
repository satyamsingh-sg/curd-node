import React, { useState, useEffect } from 'react';
import { userService } from '../../services/user.service';

function Update(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    console.log(props.name)
    setName(props.name);
    setEmail(props.email);
  }, [props]);

  const handleSave = async() => {
    const response = await userService.user.update(props.id,{name,email})
    if(response)
    {
      alert("user updated")
      props.onupdate()
    }
  };

  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#exampleModal-${props.id}`}
      >
        Update
      </button>

      <div
        className="modal fade"
        id={`exampleModal-${props.id}`}
        tabIndex="-1"
        aria-labelledby={`exampleModalLabel-${props.id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`exampleModalLabel-${props.id}`}>
                Update User
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={ handleSave}>
                <div className="form-group col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    onChange={(event) => setName(event.target.value)}
                    value={name}
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                    required
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleSave}
              >
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Update;

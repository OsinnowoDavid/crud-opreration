import React, { useState } from "react";
import TextField from "./textname";
import { useNavigate } from "react-router-dom";
import{useDispatch , } from "react-redux"
import { addUser } from "./userSlice";
import { v4 as uuidv4 } from 'uuid';
const AddUser = () => {

    const dispatch = useDispatch ();
    const navigate = useNavigate();
  const [values, setvalues] = useState({
    id: uuidv4(),
    name: '',
  email: '',
  });
 
  const Handleaddadmin = () => {
    setvalues({name:'', email:''});
    dispatch(addUser({
        id:uuidv4(),
        name: values.name,
       email: values.email
    }))

    navigate('/');
  };
  return (
    <div>
      <TextField
        Lable="Name"
        value={values.name}
        inputprops={{
          type: "type", placeholder: "Jhon doh ",
        }}
      
        onChange={(e) => setvalues({ ...values, name: e.target.value })}
        id="name" name="name" required
      />
      <br/>
      <TextField
        Lable="Email"
        value={values.email}
        inputProps={{ type: "email", placeholder: "Jhon@gmail.com" }}
      
        onChange={(e) => setvalues({ ...values, email: e.target.value })}
        id="email" name="email" required  />
   
      <button onClick={Handleaddadmin}>Submit</button>
    </div>
  );
};
export default AddUser;

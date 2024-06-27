import React from "react";
import TextField from "./textname";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { edituser } from "./userSlice";
const Edituser = () => {
  const params = useParams()
  const dispatch = useDispatch();
  const users= useSelector(store =>store.users);
  const navigate = useNavigate();
  const existinguser = users.filter(user =>user.id === params.id);
  const {name , email }= existinguser[0]
  const [values, setvalues] = useState({
    name,
  email
  });

  const Handleeditaddadmin = () => {
    setvalues({ name: "", email: "" });
dispatch(edituser({
  id: params.id,
  name: values.name,
  email: values.email
}))
    navigate("/");
  };
  return (
    <div>
      <TextField
        Lable="name"
        inputprops={{
          type: "type",

          placeholder: "Jhon doh ",
        }}
        value={values.name}
        onChange={(e) => setvalues({ ...values, name: e.target.value })}
      />
      <TextField
        Lable="email"
        inputprops={{ type: "mail", placeholder: "Jhon@gmail.com    " }}
        value={values.email}
        onChange={(e) => setvalues({ ...values, email: e.target.value })}
      />
      <button onClick={Handleeditaddadmin}>Edit</button>
    </div>
  );
};
export default Edituser;

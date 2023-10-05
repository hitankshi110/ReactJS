import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import DispData from './DispData';

let arr=[];
function Form(props) {
  const navigate=useNavigate();
  const [firstname,setFirstName] = useState();
  const [lastname,setLastName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const savedata = (e) =>{
    e.preventDefault();
    const result={
      "firstname":firstname,
      "lastname":lastname,
      "email":email,
      "password":password
    }
    
    arr.push(result);
  localStorage.setItem('formData', JSON.stringify(arr));
  console.log(arr);
  navigate("/Form",{replace : true});
  };
  
  return (
    <>    <div>
      <h1><center>Registration Form</center></h1>
     <center> <form action="#" onSubmit={savedata} >
        FirstName: <input type="text" name='firstname' onChange={(e)=>setFirstName(e.target.value)}/> <br />
        LastName: <input type="text" name='lastname' onChange={(e)=>setLastName(e.target.value)}/> <br />
        Email: <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)}/> <br />
        Password: <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)}/> <br />

        <button type='submit'>Save Data</button>

      </form></center>
    </div>
    {/* <div>
      <DispData />
    </div> */}
    </>

  );
}

export default Form;
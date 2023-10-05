import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Disp from './Disp';


  const arr = [];

function Form(props) {
  const [firstname,setFirstName] = useState();
  const [lastname,setLastName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  
  // const getData=localStorage.getItem('formData');
  // let f_data=JSON.parse(getData)
  // const data = [...new Map(f_data.map((i)=>[i.firstname,i])).values()];
  //function to getData from localstorage in state
// const [state,setState] = useState({
//     Data:JSON.parse(getData)
//    })
  //function to display data onChange
  // const SelectData=(e)=>{
  //   const inputData= e.target.value;
  //   console.log(e.target.value);
  //   // let data1=JSON.parse(getData);
  //  const filterinput=state.Data.filter((i)=>i.firstname.includes(inputData));
  //  console.log(filterinput);
  //  setState({Data:filterinput});
  // }
  
  const navigate=useNavigate();
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
  console.log(result);
  navigate("/form",{replace:true});
  };
  
  //function to display data
  
  return (
    <>
    <div>
      <h1><center>Registration Form</center></h1>
     <center> <form action="#" onSubmit={savedata} className='formdata' >
        FirstName: <input type="text" name='firstname' onChange={(e)=>setFirstName(e.target.value)}/> <br />
        LastName: <input type="text" name='lastname' onChange={(e)=>setLastName(e.target.value)}/> <br />
        Email: <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)}/> <br />
        Password: <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)}/> <br />

        <button type='submit'>Save Data</button>

      </form></center>
    
    </div>
       </>
    );
    }

  
export default Form;
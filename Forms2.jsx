import React, { useState } from 'react';

const Forms2=()=> {
    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [age,setAge] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")






    return (
        <div className='forms2'>
            <center><h2>Personal Information Form</h2></center>
            <form name='frm'>
            FirstName:   <input type="text" name='firstname' value={firstname} onChange={(e)=>setFirstName(e.target.value)}/><br />
           <hr /> LastName:   <input type="text" name='lastname' value={lastname} onChange={(e)=>setLastName(e.target.value)}/><br />
           <hr /> Age:       <input type="text" name='age' value={age} onChange={(e)=>setAge(e.target.value)} /> <br />
           <hr /> Email: <input type="text" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} /> <br />
           <hr /> Password: <input type="text" name='pwd' value={password} onChange={(e)=>setPassword(e.target.value)} /> <br />
           <br /> <input type="submit" value="Save Data" />

            </form>
            
        </div>
    );
}

export default Forms2;
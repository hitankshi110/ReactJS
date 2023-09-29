import React, { useState } from 'react';
import DispData from './DispData';


function LocalStorageForm(props) {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const saveData =(e)=>{
        e.preventDefault();
        const result={
            "name":name,
            "email":email,
            "pasword":password
        }
        localStorage.setItem('userData',JSON.stringify(result));
    }
    return (
        <>
        <div>
            <center><h1>Registration Form</h1></center>
            <form action="#" onSubmit={saveData}>
                Name: <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} /><br />
                <br />
                Email: <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} /><br />
                <br />
                Password:<input type="password" name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <br /><br />
                <button type="submit">Save</button><br />
            </form>
        </div>
        <div>
            Table
            <DispData />
        </div>
        </>
    );
}

export default LocalStorageForm;
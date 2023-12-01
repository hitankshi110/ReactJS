import React, { useState } from 'react';
import DispForm from './DispForm';

let arr=[];

function FormPractice(props) {
    const [username,setUserName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const SaveData=(e)=>{
        e.preventDefault();

        const result={
            'username':username,
            'email':email,
            'password':password
        };
        arr.push(result);
        localStorage.setItem('FormDetail', JSON.stringify(arr));
        console.log(arr);
    }
    return (
        <>
        <div>
            <h1>Registration Form</h1>
            <form action="#" onSubmit={SaveData}>
                UserName: <input type="text" name='username' onChange={(e)=>setUserName(e.target.value)} />
                Email: <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)}/>
                Password: <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)}/>

                <button type='submit'>Save Data</button>

            </form>
        </div>
        <div>
            <DispForm />
        </div>
        </>
    );
}

export default FormPractice;
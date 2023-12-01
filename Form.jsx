import React, { useState } from 'react';

let arr=[];

function Form(props) {
    const [firstname,setFirstName] = useState();
    const [lastname,setLastName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();

    const SaveData=(e)=>{
        e.preventDefault();

        const result={
            'firstname':firstname,
            'lastname':lastname,
            'email':email,
            'password': password
        };

        arr.push(result);

        localStorage.setItem('FormData',JSON.stringify(arr));
        
    }
    return (
        <div>
            <h1>Navigation Form</h1>
            <form action="#" onSubmit={SaveData}>
                FirstName: <input type="text" name='firstname' onChange={(e)=>setFirstName(e.target.value)}/>
                LastName: <input type="text" name='lastname' onChange={(e)=>setLastName(e.target.value)}/>
                Email: <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)}/>
                Password: <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)}/>

                <button type='submit'>Save</button>

                
            </form>
        </div>
    );
}

export default Form;
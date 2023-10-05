import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate=useNavigate();
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const handleSubmit=(e)=>{
        e.prevent.Default();

        const login=JSON.parse(localStorage.getItem('userData'));

    if(login.name === ''){
        alert('Please enter Name');
    }else if(login.email === ''){
        alert('Please enter Email');
    }else if(login.password === ''){
        alert('Please enter Password');;
    }else{
        alert('You have successfully logged in...!');
        
    }


    setName('');
    setEmail('');
    setPassword('');
    navigate('/Login',{replace:true});
};


    return (
        <div>
            <center><h2>Login Form</h2></center>
            <form action="#" className='loginfrm' onSubmit={handleSubmit}>
                Name: <input type="text" name='name' value={name} onChange={(e)=> setName(e.target.value)} />
                {/* <span className='error'>{errors.name}</span><br /><br /> */}
                Email: <input type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                {/* <span className='error'>{errors.email}</span><br /><br /> */}
                Password: <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                {/* <span className='error'>{errors.password}</span><br /><br /> */}

                <input type="submit" value="Login" />
            </form>
        </div>
    );
};


export default Login;
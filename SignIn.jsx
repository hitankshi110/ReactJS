import React,{ useState } from 'react';
// import Login from './Login';
import { useNavigate } from 'react-router-dom';


let arr=[];

function SignIn(props) {
    const navigate=useNavigate();
     const [name,setName] = useState();
     const [email,setEmail] = useState();
     const [password,setPassword] = useState();
     
     const handleSubmit=(e)=>{
        e.preventDefault();

        const submit={
            'name':name,
            'email':email,
            'password':password
        }
        arr.push(submit);

        if(name === ''){
            alert('Please enter your name');
        }else if(email === ''){
            alert('Please enter Email');
        }else if(password === ''){
            alert('Please enter password');
        }else{
     localStorage.setItem('userData',JSON.stringify(arr));
     console.log(arr);
    };

    setName('');
    setEmail('');
    setPassword('');

    navigate('/Login',{replace:true});
     };
     
    return (
        <>
        <div>
            <center><h2>Signin Form</h2></center>
            <form action="#" className='signinfrm' onSubmit={handleSubmit}>
                Name: <input type="text" name='name' onChange={(e)=>setName(e.target.value)} />
                {/* <span className='error'>{errors.name}</span><br /><br /> */}
                Email: <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)}/>
                {/* <span className='error'>{errors.email}</span><br /><br /> */}
                Password: <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} />
                {/* <span className='error'>{errors.password}</span><br /><br /> */}
        
                <input type="submit" value="SignIn" />
            </form>
        </div>
        <div>
            <table></table>
        </div>
        </>
    );
    
}

export default SignIn;
import React,{useState} from 'react';
//Controlled form component-usestate
const Forms=()=> {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const saveData = ()=>{
        console.log("Name is " + name)
        console.log("Pwd is " + password)
        console.log("Email is " + email)

    }
    return (
        <div className='form'> 
            <center><h3>Registration Form</h3></center>
            <form name='frm' onSubmit={saveData}>
                Name:   <input type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)}/><br />
               <hr /> Email:   <input type="text" name='name' value={email} onChange={(e)=>setEmail(e.target.value)}/><br />
                <hr />Password: <input type="text" name='name' value={password} onChange={(e)=>setPassword(e.target.value)}/><br /><br />
                <input type="submit" value="Save Data" />

            </form>
            
            
        </div>
    );
}

export default Forms;
import React,{useState} from 'react';

const Forms1=()=> {
    const [firstname,setFirstName] = useState("")
    const [lastname,setLastName] = useState("")
    const [email,setEmail] = useState("")
    const saveData = ()=>{
        console.log("FirstName is " + firstname)
        console.log("LastName is " + lastname)
        console.log("Email is " + email)

    }
    return (
        <div className='forms1'> 
            <center><h3>Registration Form</h3></center>
            <form name='frm' onSubmit={saveData}>
                FirstName:   <input type="text" name='name' value={firstname} onChange={(e)=>setFirstName(e.target.value)}/><br />
               <hr color='black'/> LastName:   <input type="text" name='name' value={lastname} onChange={(e)=>setLastName(e.target.value)}/><br />
                <hr color='black'/>Email: <input type="text" name='name' value={email} onChange={(e)=>setEmail(e.target.value)}/><br /><br />
                <hr color='black'/><input type="submit" value="Save Data" />

            </form>
            
            
        </div>
    );
}

export default Forms1;
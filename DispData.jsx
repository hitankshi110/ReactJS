import React from 'react';
import { useNavigate } from 'react-router-dom';

function DispData(props) {
    const navigate=useNavigate();
    let dispData=localStorage.getItem('formData');
    let Data=JSON.parse(dispData);  

    const deleteData=(id)=>{
        Data.splice(id,1);
        localStorage.removeItem('formData');
        console.log('Data deleted !');
        navigate("/DispData",{replace : true});
    };
    return(
    <div>
        <center><h3>Form Data Table</h3></center>
        <center><table border={2} className='datatable'>
            <tr>
                    <th>FirstName</th>
                    <th>LastName</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
               {Data.map((i,index) => {
        return(
            <tr>
                    <td>{i.firstname}</td>
                    <td>{i.lastname}</td>
                    <td>{i.email}</td>
                    <td>{i.password}</td>
                    <td><button type='button' onClick={()=>deleteData(index)}>Delete</button></td>
                </tr>   
        );
        })}
         </table></center>
         </div>
    );
}

export default DispData;
import React from 'react';

function Display(props) {
    const Disp=localStorage.getItem('FormData');
    
    const Data=JSON.parse(Disp);

    const deleteData=(id)=>{
        Data.splice(id,1);
        localStorage.setItem('FormData',JSON.stringify(Data));
        console.log('Data deleted');
        

    }
    return (
        
        <div>
            <h1>Display Data</h1>
            <table>
                <tr>
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
               { Data.map((i,index)=>{
                return(
                <tr>
                    <td>{i.firstname}</td>
                    <td>{i.lastname}</td>
                    <td>{i.email}</td>
                    <td>{i.password}</td>
                    <td><button type='button' name='delData' onClick={()=>deleteData(index)}></button></td>


                </tr>
                );
                })}
                

            </table>
            
        </div>
    );
}

export default Display;
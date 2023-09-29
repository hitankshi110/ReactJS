import React from 'react';

function DispData(props) {
    let getData=localStorage.getItem('userData');
    let Data=JSON.parse(getData);
    const deleteData=()=>{
        localStorage.removeItem('userData');
        console.log('Data deleted !');
    }
    return (
        <div>
            <table border={1}>
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Password</td>
                    <td>Action</td>
                </tr>
                <tr>
                    <td>{(Data)?Data.name:''}</td>
                    <td>{(Data)?Data.email:''}</td>
                    <td>{(Data)?Data.password:''}</td>
                    <td><button type='button' onClick={deleteData}>Delete</button></td>

                </tr>
            </table>
            
        </div>
    );
}

export default DispData;
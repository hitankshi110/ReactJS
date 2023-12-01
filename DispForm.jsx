import React from 'react';

function DispForm(props) {
    const Getdata=localStorage.getItem('FormDetail');
    const Data=JSON.parse(Getdata);

    const deleteData=()=>{
        localStorage.removeItem('FormDetail');
        console.log('Data deleted!');
    }
    return (
        <div>
            <h2>Display Form</h2>
            <table border={1}>
                <tbody>
                <tr>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>Action</th>
                </tr>
                <tr>
                    <td>{(Data)?Data.username:''}</td>
                    <td>{(Data)?Data.email:''}</td>
                    <td>{(Data)?Data.password:''}</td>
                    <td><button type='button' name='Deldata' onClick={deleteData}>Delete</button></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default DispForm;
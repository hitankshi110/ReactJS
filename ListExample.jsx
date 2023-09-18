import React from 'react';

function ListExample(props) {
    const number = props.allno
    const info = props.info
    const res = number.map((a,index)=>{
        return <li key={index}>{a}</li>
    })
    const result = info.map((e)=>{
        return(
            <div><b>Name is </b>{e.name} - {e.rollno} - {e.qualification}</div>
        )
    });
    return (
        <div>
            <ul> {res}</ul>
            <div>
                <h2>Personal Information</h2>
                <div>{result}</div>
            </div>
        </div>
    );
}

export default ListExample;
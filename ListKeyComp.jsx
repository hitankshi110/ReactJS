import React from 'react';

function ListKeyComp(props) {
    const number = props.allno
    const d_info = props.info
    const xyz = number.map((a,index)=>{
        return <li key={index}>{a}</li>
    })
    const data = d_info.map((e)=>{
        return(
            <div>Name is {e.name} - {e.rollno} - {e.qualification}</div>
        )
    });
    return ( 
        <div>
            <ul> {xyz}</ul>
            <div>
                <h2>List and Key Components</h2>
                <div>{data}</div>
            </div>
        </div>
    );
}

export default ListKeyComp;
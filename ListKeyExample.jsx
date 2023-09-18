import React from 'react';

function ListKeyExample(props) {
    const num = props.allnum
    const d_info = props.info
    const xyz = num.map((e,index)=>{
        return <li key={index}>{e}</li>
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
                <h2>List and Key Example</h2>
                <div>{data}</div>
                
                
            </div>
        </div>
    );
}

export default ListKeyExample;
import React from 'react';
import { useParams } from 'react-router-dom';

function Contact(props) {
    const {no} = useParams();
    return (
        <div>
            <h1>Contact Page Calling.. - no is {no}</h1>
        </div>
    );
}

export default Contact;
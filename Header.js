import React from 'react';
import {Link,useNavigate} from 'react-router-dom';

function Header(props) {
    const no=161;
    const navigate = useNavigate();
    return (
        <>
        <div>
            
            <h2><center><button onClick={()=>navigate(-1)}>Back</button>
            <button onClick={()=>navigate(1)}>Forward</button></center></h2>

            <nav>
                <ul>
                    <li>
                    <Link to='/'>Home</Link>
                    </li>
                    <li>
                    <Link to={`/About/${no}`}>About</Link>
                    </li>
                    <li>
                    <Link to={`/Contact/${props.no}`}>Contact</Link>
                    </li>
                    <li>
                    <Link to={'/Form'}>Form</Link>
                    </li>
                    <li>
                    <Link to={'/DispData'}>DispData</Link>
                    </li>
                    <li>
                    <Link to={'/RouterPractice'}>Routerpractice</Link>
                    </li> 
                    <li>
                    <Link to={'/Display'}>Display</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
        </>
    );
}

export default Header;
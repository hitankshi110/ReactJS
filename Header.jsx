import React from 'react';
import { Link } from 'react-router-dom';


function Header(props) {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/form'>Form</Link>
                    </li>
                    <li>
                        <Link to='/disp'>Table</Link>
                    </li>
                    <li>
                        <Link to='/Signin'>SignIn</Link>
                    </li>
                    <li>
                        <Link to='/Login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/AboutUs'>AboutUs</Link>
                    </li><li>
                        <Link to='/ContactUs'>ContactUs</Link>
                    </li>
                </ul>
            </nav>
            
        </div>
    );
}

export default Header;
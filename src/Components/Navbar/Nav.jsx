import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'; // Import CSS for styling
import { login, logout } from '../LoginCheck'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const login_check_value = useSelector((state) => state.counter.value)
      const navigator=useNavigate()
    const dispatch = useDispatch()
   const logouts=()=>
    {
       dispatch(logout())
       navigator("/") 
    }
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    <NavLink to="/">
                        <img src="https://imgs.search.brave.com/jNSCfjZBSkfqsq2Q-hI_O_H7OhPE8QgROA0-Yli1EHI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LmFk/bWlzc2lvbm1iYS5p/bi93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wNC9BSU1TLUJh/bmdhbG9yZS1sb2dv/LmpwZz9yZXNpemU9/MzYxLDMwMCZzc2w9/MQ" alt="Logo" />
                    </NavLink>
                </div>
                <ul className="menu">
                  
                    <li><NavLink to="/template" activeClassName="active">Templates</NavLink></li>
                   
                    
                    {login_check_value?  <li><NavLink to="/download" activeClassName="active">Download</NavLink></li>:""}
                    {login_check_value?  <li><NavLink  onClick={logouts} activeClassName="active">Logout</NavLink></li>:
                    <>
                    <li><NavLink to="/login" activeClassName="active">Login</NavLink></li>
                    <li><NavLink to="/register" activeClassName="active">Sign Up</NavLink></li>
                    </>
                    }
                   
                  
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;

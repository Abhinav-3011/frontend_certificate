import React from 'react';
import './Nav.css'; // Import CSS for styling

const Navbar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo">
                    {/* Replace the src attribute with a valid image URL */}
                    <a href="#"><img src="https://imgs.search.brave.com/jNSCfjZBSkfqsq2Q-hI_O_H7OhPE8QgROA0-Yli1EHI/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LmFk/bWlzc2lvbm1iYS5p/bi93cC1jb250ZW50/L3VwbG9hZHMvMjAy/My8wNC9BSU1TLUJh/bmdhbG9yZS1sb2dv/LmpwZz9yZXNpemU9/MzYxLDMwMCZzc2w9/MQ" alt="Logo" /></a>
                    {/* Use a placeholder image for testing */}
                </div>
                <ul className="menu">
                    <li><a href="#">Features</a></li>
                    <li><a href="#">For Work</a></li>
                    <li><a href="#">Templates</a></li>
                    <li><a href="#">Sign Up</a></li>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Download</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;

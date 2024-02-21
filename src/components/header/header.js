import React from 'react';
import './Header.css'; // Import the CSS file

function Header() {
    return (
        <header className="header">
            <div className="logo">Your Logo</div>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/popular">Popular</a></li>
                    <li><a href="/new">New</a></li>
                    {/* Add more navigation links as needed */}
                </ul>
            </nav>
        </header>
    );
}

export default Header;

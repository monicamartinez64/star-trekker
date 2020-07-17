import React from 'react';

const NavBar = ({ user, handleLogout }) => {
    let nav = user ?
    <>
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="left">
                    <li><a href="/" className="nav-link">AstroTrek</a></li>
                    <li><a href="/observations/add" className="nav-link">+ Observation</a></li>
                    <li><a href="/astro/add" className="nav-link">+ Object</a></li>
                    <li><a href="/astro" className="nav-link">My Objects</a></li>
                </ul>
                <ul id="nav-mobile" className="right">
                    {/* <li><a href=" " className="nav-link">Welcome, {user.name}</a></li> */}
                    <li><a href=" " className="nav-link" onClick={handleLogout}>Log Out</a></li>
                </ul>
            </div>
        </nav>
    </>
    :
    <>
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="left">
                <li><a href="/" className="nav-link">AstroTrek</a></li>
                <li><a href="/" className="nav-link">About</a></li>
                <li><a href="/" className="nav-link">Visits</a></li>
                <li><a href="/" className="nav-link">Constellations</a></li>
                </ul>
                <ul id="nav-mobile" className="right">
                    <li><a href="/login" className="nav-link">Log In</a></li>
                    <li><a href="/signup" className="nav-link">Sign Up</a></li>
                </ul>
            </div>
        </nav>
    </>

    return (
    <>
        {nav}
    </>
    )
}

export default NavBar;
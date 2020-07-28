import React from 'react';

const NavBar = ({ user, handleLogout }) => {
    let nav = user ?
    <>
        <nav>
            <div className="nav-wrapper">
                <ul id="nav-mobile" className="left">
                    <li><a href="/" className="nav-link"><h5 className="flow-text">StarTrekker</h5></a></li>
                    <li><a href="/observations/add" className="nav-link"><i className="material-icons left">add_box</i>Observation</a></li>
                    <li><a href="/astro/add" className="nav-link"><i className="material-icons left">add_box</i>Object</a></li>
                    <li><a href="/astros" className="nav-link"><i className="material-icons left">brightness_2</i>Objects List</a></li>
                    <li><a href="/observations" className="nav-link"><i className="material-icons left">remove_red_eye</i>Obsevations List</a></li>
                    <li><a href="/weather" className="nav-link"><i className="material-icons left">cloud</i>View Weather</a></li>
                </ul>
                <ul id="nav-mobile" className="right">
                    <li><a href=" " className="nav-link">Welcome, {user.name}</a></li>
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
                    <li><a href="/" className="nav-link"><h5 className="flow-text">StarTrekker</h5></a></li>
                    <li><a href="/astros" className="nav-link"><i className="material-icons left">brightness_2</i>Objects</a></li>
                    {/* <li><a href="/observations" className="nav-link"><i className="material-icons left">remove_red_eye</i>Obsevations List</a></li> */}
                    <li><a href="/weather" className="nav-link"><i className="material-icons left">cloud</i>View Weather</a></li>
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
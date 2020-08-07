import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from './Logo';


const Menu = () => {
    return (
// https://stackoverflow.com/questions/47455788/reactjs-navlink-activeclassname
        <nav className="navbar navbar-expand-lg">
            <div className="container">
            <a className="navbar-brand" href="/">
                <Logo></Logo>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                Menu
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                <NavLink className="nav-link" exact to="/">첫화면</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" exact to="/career">경력</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" exact to="/about">소개</NavLink>
                </li>
                {/* <li className="nav-item">
                <NavLink className="nav-link" to="/about/foo">About Foo</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/posts">Posts</NavLink>
                </li> */}
                </ul>
            </div>
            </div>
           
        </nav>
        // <div>
        //     <ul>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //         <li></li>
        //     </ul>
        //     <hr/>
        // </div>
    );
};

export default Menu;
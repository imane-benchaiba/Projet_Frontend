import React from 'react';
import { NavLink } from 'react-router-dom';
import IconHome from "../img/icons/home.svg";
import IconUser from "../img/icons/user.svg";
import IconBook from "../img/icons/book.svg";


const LeftNav = () => {
    return (
        <div className="left-nav-container">
            <div className="icons">
                <div className="icons-bis">
                    <NavLink to='/home' exact activeClassName="active-left-nav">
                        <img src={IconHome} alt="home" className="icon"/>
                    </NavLink>
                    <br/>
                    <NavLink to='/booksthread' exact activeClassName="active-left-nav">
                        <img src={IconBook} alt="book" className="icon"/>
                    </NavLink>
                    <br/>
                    <NavLink to='/profil' exact activeClassName="active-left-nav">
                        <img src={IconUser} alt="user" className="icon"/>
                    </NavLink>                    
                </div>           
            </div>           
        </div>
    )
}

export default LeftNav

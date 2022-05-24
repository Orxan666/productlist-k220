import React from 'react'
import { Link } from 'react-router-dom'
import './header.scss'
const Header = () => {
  return (
        <header className='header'>
<div className="container">
    <div className="d-flex">
        <div className="logo">
            <h1>LOGO</h1>
        </div>
        <div className="nav-menu">
            <ul>
                <li>
                    <Link>Home</Link>
                </li>
                <li>
                    <Link>About</Link>
                </li>
                <li>
                    <Link>Contact</Link>
                </li>
            </ul>
        </div>
    </div>
</div>
        </header>
  )
}

export default Header
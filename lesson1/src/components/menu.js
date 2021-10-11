import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'


export default function Menu() {
    return (<>

        <nav className="nav">
           
            <ul className="ul-nav"> 
                <div style={{fontSize:20}} className="li-nav">{"E&E Store"}</div>
                <li style={{color:'white'}} className="li-nav"><Link to="/PaymentPage">Payment Page</Link></li>
                <li className="li-nav"><Link to="/ProductStore">Products</Link></li>
                <li className="li-nav"><Link to="/About">Aboute the store</Link></li>
            </ul>

        </nav>
    </>)
}
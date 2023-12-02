import React from 'react';
import './navbar.css'
import Dropdown from './Dropdown/dropdown';
const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
import { companyName } from '../../dataStore/data';
const arr=[
{Dropdown:"Dropdown",inner:[{heading:"heading",submsg:"inner"},{heading:"heading",submsg:"inner"},{heading:"heading",submsg:"inner"}]},
{Dropdown:"Dropdown",inner:[{heading:"heading",submsg:"inner"},{heading:"heading",submsg:"inner"}]},
{Dropdown:"Dropdown",inner:[{heading:"heading",submsg:"inner"},{heading:"heading",submsg:"inner"}]},
]
export default function Navbar(){

    return (
     <div className='navbar'>
     <div className='logo'>
     <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/258_Pied_Piper_logo-512.png"></img>
     <span>{companyName}</span>
     <div className='dropdownElements'>
     {arr.map((i)=>{
        return(
     <Dropdown value={i}/>
        )
     })}
     </div>
     </div>
     <div className='nav-left'>
     <span className='hoverElement'>Request Demo </span>
     <span className='hoverElement'>Login</span>
     <button className='notionButton'>Get {companyName} free</button>
     </div>
     
     </div>
    );
  }
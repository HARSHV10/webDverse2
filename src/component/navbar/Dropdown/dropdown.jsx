import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import './dropdown.css'
import DropdownElement from './DropdownElement/dropdownElement';


export default function Dropdown({value}){
    const [hover,setHover]=useState(false)

    const handelmouseOver=()=>{
            setHover(true);
    }
    const handelmouseAway=()=>{
            setHover(false);
    }
    console.log(value.inner)
    const arr = value.inner;

    return(
        <div className='dropdown' onMouseOver={handelmouseOver}
        onMouseLeave={handelmouseAway}
        >
        <div className='dropDownHeading hoverElement'>
        {value.Dropdown}
        <span>
        {hover?<ChevronUp size={13} strokeWidth={3}/>:<ChevronDown size={13} strokeWidth={3} />}
        </span>
        </div>
        <div className='dropdown_component'>
        {hover&&arr?.map((i)=>{return(<DropdownElement value={i}/>)})}
        </div>
        </div>
    )
}
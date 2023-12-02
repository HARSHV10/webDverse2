import React from 'react';
import './dropdownElement.css'
import { BookOpenText } from 'lucide-react';

export default function DropdownElement({value}){
    console.log(value.heading)
    return(
        <div className='dropdownElement'>
        <div>
        <BookOpenText color='red' size={25}/>
        </div>
        <div>
        <div className='dropdownHeading'>
        {value.heading}
        </div>
        {value.submsg}
        </div>
        </div>
    )
}
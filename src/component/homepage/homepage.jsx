import React from 'react';
import './HomePage.css'
import { ArrowRight } from 'lucide-react';
import { companyName,tagline1,tagline2,tagline3,tagline4 } from '../../dataStore/data';
export default function HomePage(){
    return(
        <div className='homepage'>
        <div> {tagline1}<br></br>
        {tagline2}
        <div>{companyName} is the connected workspace where better, faster work happens.</div>
        </div>
        <div className='homeButton'>
        <button className='notionButton'> Get {companyName} free <span><ArrowRight strokeWidth={3}/></span> </button>
        </div>
        </div>
    )
}
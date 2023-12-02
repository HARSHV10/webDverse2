import React from 'react';
import './card.css'
import { Sparkles } from 'lucide-react';
export default function Card({Icon}){
    // console.log(props.props)
    return(
        <div className='card'>
        <div className='innercard'>
        <span>
        <Icon/>
        </span>
        <div className='CardHeading'>
        AI
        </div>
         </div>
        <div>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </div>

        </div>
    )
}
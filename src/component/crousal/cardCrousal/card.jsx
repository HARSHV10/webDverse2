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
        Seed 
        </div>
         </div>
        <div>GET CLINICALLY TESTED SEEDS FOR BETTER CULTIVATION </div>

        </div>
    )
}

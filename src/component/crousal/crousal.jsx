import React, { useState } from 'react';
import Card from './cardCrousal/card';
import './crousal.css'
import { Sparkles } from 'lucide-react';

// <Sparkles color='purple' size={25} fill='purple'/>
const arr =["https://www.notion.so/front-static/meta/default.png",
"https://www.notion.so/cdn-cgi/image/format=webp,width=3840/https://img.youtube.com/vi/gp2yhkVw0z4/maxresdefault.jpg",
"https://nira.com/wp-content/uploads/2020/05/Screen-Shot-2020-04-29-at-18.22.57.png"]
const subCards=[<Card Icon={Sparkles}/>,<Card Icon={Sparkles}/>,<Card Icon={Sparkles}/>,<Card Icon={Sparkles}/>]


export default function Crousal(){
    const [index,setindex]=useState(0);
    return(
        <div className='coursal'>
        <img className='coursalimg' src='https://www.notion.so/cdn-cgi/image/format=webp,width=2048/https://images.ctfassets.net/spoqsaf9291f/3csRrNi1u82ymVlwjfo2E6/02516e52af15501acd822d3e7a03baf9/home-hero.png'></img>
        <div className='subCrousal'>
        {subCards}
        </div>
        <div className='crousalTwo' onClick={(e)=>{
            if(e.pageX>500){
                setindex((index+1)% arr.length);
            }
            else{
                if(index-1<0){
                    setindex(arr.length-1);
                }
                else{
                    setindex((index-1));
                }
            }
        }}>
        <img className='crousalimg' src={arr[index]}></img>
        </div>
        </div>
    )
}
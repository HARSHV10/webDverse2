import React from 'react';
import './reviews.css'
import { ArrowRight, Rocket } from 'lucide-react';
import { Palette } from 'lucide-react';
import { Hammer } from 'lucide-react';
import { Volume } from 'lucide-react';
import { Compass } from 'lucide-react';
const arr =["https://images.ctfassets.net/spoqsaf9291f/502ApiNcRHgIwrDU8XRYTQ/c70d8752079a40241d08ec85dac5f93d/figma-logo.png",
"https://images.ctfassets.net/spoqsaf9291f/6S40IUVrdki2SlPXQMHKKr/e02c776d183f70c84fa53e077a0f7b1a/pixar.png",
"https://images.ctfassets.net/spoqsaf9291f/1jlyWNfa8mnYxJtmzu5lpV/4072e10330206f9057fe77ab19ce1bca/doordash.png",
"https://images.ctfassets.net/spoqsaf9291f/2VtWKmfmToo8n3X7BY0WwA/ccdcd719ee3bc3fa76148eae11d97c51/nike.png",
"https://images.ctfassets.net/spoqsaf9291f/6dIueLe6mDK6HhNObFq2On/a6cd5c6aa443fe0fc69386522acf7b70/amazon.png",
"https://images.ctfassets.net/spoqsaf9291f/6WgTu82608DIXfxu9KliYL/326d36bbde762fd9c1800872db81244c/pinterest.png",
"https://images.ctfassets.net/spoqsaf9291f/LnKYnStAE4vKs51ejLRj2/69cb3e0382538d4c925208ea24f253f5/General_Electric_logo.svg__1_.png",
"https://images.ctfassets.net/spoqsaf9291f/3o80U1VqLr5X1nE4kWlZM5/7d1493bad9ba1bd0adf0cf21b6751dd2/uber.png",
"https://images.ctfassets.net/spoqsaf9291f/2owwRqFrnSdM98Js9Itzih/15cca0ca61fbbaadfeef6b70108ffb42/plaid.png",
"https://images.ctfassets.net/spoqsaf9291f/18DMuU2Os0OAYiJxqU3aE7/3f2d9ce2c5761513c4f34f41cf85b028/Screen_Shot_2022-09-27_at_11.11_3.png",
,"https://images.ctfassets.net/spoqsaf9291f/18DMuU2Os0OAYiJxqU3aE7/3f2d9ce2c5761513c4f34f41cf85b028/Screen_Shot_2022-09-27_at_11.11_3.png",
"https://images.ctfassets.net/spoqsaf9291f/346udUCJm76OzP8M0yI78w/81099c4f771df9286782581fe18d0efc/snowflake.png",
"https://images.ctfassets.net/spoqsaf9291f/xDZNk5XtOxMEiqsiJ6paq/c9958ceead0fb85872449d26186d62b1/headspace__1_.png",
"https://images.ctfassets.net/spoqsaf9291f/4r1tX1hoz2RZigBJYbFbBJ/37e1dc9aa41342497d3e35a31649b2ae/angel-list.png",
"https://images.ctfassets.net/spoqsaf9291f/4AmP2cmuZ2kUwbeSw3ukj9/91ee33f40debced0e8188a0847cb65af/robinhood_logo.png",

]


const icon=[{heading:"Design",two:<Palette size={50}/>},
{heading:"Engineering",two:<Hammer size={50}/>},
{heading:"Operation",two:<Rocket size={50}/>},
{heading:"Product",two:<Volume size={50}/>},
{heading:"HR",two:<Compass size={50}/>},

]

export default function Reviews(){
    return(
        <div className='reviews'>
        <h1>Millions run on Notion every day</h1>
        <span>Powering the world’s best teams, from next-generation startups to established enterprises.</span>
        <br></br>
        <a href='#'>Read Customer Stories</a>
        <div className='companyReview'>
       {arr.map((i)=>{
        return( <img className='companyimg' src={i}></img>)
       })}
        </div>
        <h1>Every team, Side-By-side </h1>
        <div className='EveryTeam'>
        {icon.map((i)=>{
            return(
                <div className='iconCard'>{i.two}<h3>{i.heading}</h3></div>
            )
        })}
        </div>
        </div>
    )
}
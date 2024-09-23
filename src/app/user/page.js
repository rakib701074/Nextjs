'use client';
// import {redirect} from 'next/navigation'

import {useState} from "react";
export default function User(){
    //  redirect("/")
    const [h3Style, setH3Style] = useState({backgroundColor: 'green'})
    return(
        <div>
            <h1>User Page</h1>
            <h2 style={{backgroundColor : " yellow"}}>User name</h2>

            <h3 style={h3Style}>Heading 3  for user </h3>
            <button onClick={()=>setH3Style({backgroundColor: "red"})}>Update Style</button>
        </div>
    )
}
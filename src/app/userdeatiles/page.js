"use client"
import Script from "next/script";


export default function Page() {
    return (
        <main>
            <Script  src="/locations.js" onLoad={()=>{
                console.log("file loaded");
            }} />
            <h1>Get user getlocation</h1>
        </main>
    )
}

// export default function Page() {
//     return (
//         <main>
//             <Script src="/location.js" onLoad={() => console.log("file loaded")} />
//             <h1>Get user location</h1>
//         </main>
//     );
// }

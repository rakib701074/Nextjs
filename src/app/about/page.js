'use client'
import {useRouter} from "next/navigation"; 

const About=()=>{
    let router = useRouter();
    let navigate=(name)=>{
        router.push(name)
    }

    return(
        <div>
            <h1>About Page</h1>
            <button onClick={() => navigate("/")}>Go to Home page</button>
            <br/>
            <br/>
            <button onClick={()=> navigate('/about/aboutcollege')}>Go to AboutCollege page</button>
            <br/>
            <br/>
            <button onClick={()=> navigate('/about/aboutstudent')}>Go to AboutStudent page</button>
        </div>
    )
}

export default About;
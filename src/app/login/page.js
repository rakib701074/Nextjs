'use client'
import Link from "next/link"; 
import './login.css';
import {useRouter} from 'next/navigation';


const Login = ()=> {
    const router = useRouter();
      let navigate=(page)=>{
        router.push("/login/"+page)
      }
    return(
     <div>
        <h1 className='heading' >Login Page</h1>
        <Link href="/">Go to Home Page</Link>
        <br/>
        <br/>
        <button onClick={() => navigate("loginstudent")}>Go to login page for student</button>
        <br/>
        <br/>
        <button onClick={() => navigate("loginteacher")}>Go to login page for teacher</button>
     </div>
    )
}
export default Login;
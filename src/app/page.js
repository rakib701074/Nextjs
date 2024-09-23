
export default function Home(){
// console.log(process.env.NODE_ENV)
if (typeof process.env.SERVER_PASWORD !== 'undefined'){
  console.log(process.env.SERVER_PASWORD);
}else{
  console.log("undefined server password");
}

  return(
    <main>
  
      {
       process.env.NODE_ENV=="development"?
       <h1>U are on development mode</h1>
       : 
       <h1>u are on production mode</h1>
      }
      <h1>Enviroment variables in next js</h1>
    </main>
  )
}
















// export default function Home(){
//   return(
//     <main>
//       <h1>static assets in next js</h1>
//     </main>
//   )
// }







// import { Roboto } from "next/font/google"
// const roboto = Roboto({
//   weight: '100',
//   subsets:['latin'],
//   display:'swap'
// })
// export default function Home(){
//   return(
//     <main>
//       <h1>Font optimization in Next</h1>
//       {/* <h2 style={{fontFamily:'Robot',fontWeight:100}}>Font optimization in Next</h2>  */}

//       <h1 className={roboto.className}>Font with Next Js font feature</h1>
//     </main>
//   )
// }





















// 'use client'
// import Link from "next/link";
// import Image from 'next/image';
// import Profile from "../../public/vercel.svg"
// export default function Home(){
//   return(
//     <main>
//       <h1>Image optimization in next</h1>

//       {/* <Image src={Profile}
//        />

//        <img src={Profile.src} /> */}


//        {/* <Image src="https://commons.wikimedia.org/wiki/Main_Page#/media/File:Plaza_Pogorzelica_1.jpg" width={500} height={100} /> */}




//        <Image
//         src="https://example.com/image.jpg" // Replace with your external image URL
//         alt="Description of the image"
//         width={500} // Desired width
//         height={300} // Desired height
//         layout="responsive" // Responsive layout (optional)
//       />

//     </main>
//   )
// }










// 'use client'
// import Link from "next/link"; 
// import custom from "./custom.module.css";
// import other from "./other.module.css";
// // import outside from "../style/outside.module.css";
// import outside from "@/style/outside.module.css";

// import { useState } from "react";

// import style from "./style.module.css";

// export default function Home() {

//   const [color,setColor]=useState("red");
//   return (
//   <main>
//     {/* <h1 className={custom.main} > Css Module With Next js </h1>
//     <h2 className={other.main}> Headin 2 </h2>
//     <h2 className={outside.main}> outside 3 </h2> */}
//     {/* <Link href="/productlist">Go to Product List</Link> */}

//     <h1 className={color=='red'?style.red:style.green}> condtion with style </h1>

//     <h2 style={{backgroundColor: color=='red'?'red':'green'}}></h2>
    
//     <button onClick={()=>setColor("green")}>update txt color</button>

//     </main>
//   );
// }



// const User=(props) =>{
//   return (
//     <div>
//       <h2>User Name is {props.name}</h2>
//     </div>
//   )
// }



  // const [name,setName]= useState("shaikh")

  // let data ="sam";
  // const fruit=()=>{
  //   // setName("imdhn")
  //   data = "bhaskar"
  
  // }

  // const InnerComp=()=>{
  //   return (
  //     <h1>Inner Component</h1>
  //   )
  // }
  // return (
  //   <main className={styles.main}>
  //     <h1>Evenst , functions and state {data}</h1>
  //     <button onClick={()=>fruit("apple")}>Click Me</button>

  //     {<InnerComp />}
  //     {/* {InnerComp()}   //function component */}
       












//   'use client'
// import Link from "next/link"; 
// import styles from "./page.module.css";
// import {useRouter} from 'next/navigation'

// export default function Home() {
//   const router = useRouter();

//   const navigate = (name)=>{
//     router.push(name);
//   }
//   return (
//   <main>
//     <h1 >Dynamic Routing </h1>
//         <Link href="/login">Go to login page</Link>
//         <br/>
//         <br/>
//         <Link href="/about"> Go to About Page</Link>
//         <br/>
//         <br/>
//         <button onClick={ ()=> navigate("/login")}>Go to Login Page</button>
//         <br/>
//         <br/>
//         <button onClick={ ()=> navigate("/about")}>Go to About Page</button>

//     </main>
//   );
// }
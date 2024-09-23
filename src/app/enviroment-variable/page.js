import { API_BASE_URL } from "../config/constant";
export default function Enviroment(){
    // console.log(process.env.NODE_ENV)
    // if (typeof process.env.SERVER_PASWORD !== 'undefined'){
    //   console.log(process.env.SERVER_PASWORD);
    // }else{
    //   console.log("undefined server password");
    // }

    if(typeof  process.env.SHAIKH !=='undefined'){
        console.log(process.env.SHAIKH);
    }else{
        console.log("Undefined Server");
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
          {
            API_BASE_URL
          }
        </main>
      )
    }
    
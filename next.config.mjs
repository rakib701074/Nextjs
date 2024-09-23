/** @type {import('next').NextConfig} */
const nextConfig = {
    // output: 'export',

    redirects:async() =>{
        return[
            {
                source:'/user',
                destination:'/',
                permanent:false,
            },
            {
                source:'/user/:userid',
                destination:'/',
                permanent:false,
            },

           { source:'/admin',
            destination:'/',
            permanent:false,
           }
        ]
    },

    // images:{
    //     domains:["example.com"]
    // },
     
};
    
export default nextConfig;

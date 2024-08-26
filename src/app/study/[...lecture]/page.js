"use client";
export default function Lecture({params}){
    // const param = params();
    console.log(params);

    return(
        <div>
                <h1> Day of College {params.lecture[0]}</h1>
                <h2> Day of Lecture {params.lecture[1]}</h2>
        </div>
    )
}
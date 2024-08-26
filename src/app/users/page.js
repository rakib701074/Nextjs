export default function Page(){
    return(
        <main>
            <h1>User Page</h1>
        </main>
    )
}

export function generateMetadata({params}){
    return{
        title:"user page title",
        description:"use page description"
    }

}
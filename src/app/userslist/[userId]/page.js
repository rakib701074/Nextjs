import GetUsers from "../../../../services/getUsers"

export default async function Page(props){
    
    const getUserlist = GetUsers();
    const users = await getUserlist;

    const currentId = props.params.userId;
    const userData = users[currentId-1];
    console.log(users[currentId-1]);
    return(
        <div>
            <h3>User Deatiles Page</h3>
            <h4>{userData.id}</h4>
            <h4>{userData.name}</h4>
            <h4>{userData.website}</h4>
        </div>
    )
}

export async function generateStaticParams(){
     
    const getUserlist = GetUsers();
    const users = await getUserlist;
    return users.map(user=>({
        userId: user.id.toString()
    }))
    
}
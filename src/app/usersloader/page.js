
async function userlist(){
    let data = await fetch("https://dummyjson.com/users");
    data = await data.json();
    return data.users;
}

export default async function UsersLoader(){

    let users = await userlist();
    console.log(users);
    return(
        <main>
            <h1>User Name List</h1>
            {

            users.map((item)=>(
                <div key={item.id}>
                  <h2 >User Name: {item.firstName}</h2>
                </div>
            ))

            
        }

        </main>
    )
}
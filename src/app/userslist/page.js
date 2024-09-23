import GetUsers from "../../../services/getUsers"
import Link from "next/link";

export default async function Page(){
    const getUserlist = GetUsers();
    const users = await getUserlist;
    console.log(users);
    return(
        <main>
            <h1>User List</h1>
            {
            users.map((user)=> (
                <h2 key={user.id}>
                    <Link href={`/userslist/${user.id}`}>{user.name}</Link>
                </h2>
            ))
            }
        </main>
    )
}
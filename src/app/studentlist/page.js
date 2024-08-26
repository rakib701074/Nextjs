import Link from "next/link"
export default function StudentList(){
    return(
           <div>
            <h1>Student List</h1>

            <ul>
                <li>
                    <Link href="/studentlist/Aftar">Aftar</Link>
                </li>

                <li>
                    <Link href="/studentlist/sohel">sohel</Link>

                </li>

                <li>
                   <Link href="/studentlist/sahil" >sahil</Link>
                </li>

                <li>
                    <Link href="/studentlist/shakir">shakir</Link>
                </li>
            </ul>
           </div>
    )
}

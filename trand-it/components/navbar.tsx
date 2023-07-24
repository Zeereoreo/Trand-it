import Link from "next/link";

export default function Navbar(){
    return (
        <div>
            <Link href="/">Home</Link>
            <Link href="/">List</Link>
            <Link href="/">Util</Link>
            <Link href="/">Else</Link>
        </div>
    )
}
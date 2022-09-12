import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-green-700 text-white items-center ">
            <span className="font-bold">Rick and Morty</span>
            <span>
                <Link className="mr-2" to='/'>About</Link>
                <Link to='/characters'>Characters</Link>
            </span>
        </nav>
    )
}
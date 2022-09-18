import { Link } from "react-router-dom";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between bg-zinc-800 text-white items-center opacity-80 hover:opacity-100">
            <img className="omg w-[50px]" src="./rm11.jpg" alt=""/>
            <span className="px-5">
                <Link className="mr-2" to='/'>About</Link>
                <Link to='/characters'>Characters</Link>
            </span>
            
        </nav>
    )
}
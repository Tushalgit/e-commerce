import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import logo from "../assets/images/logo.jpg"

function Header() {
    
    return (
        <header className="py-5 bg-slate-100 w-full z-50 max-md:border-b max-md:border-b-blue-300">
            <div className="max-container">
                <nav className="flex items-center justify-between relative">
                    <Link to="/" className="logo">
                        <img src={logo} alt="logo" className="w-[80px] h-15 rounded object-cover max-md:w-[60px]"/>
                    </Link>
                    <Navbar />
                </nav>
            </div>
        </header>
    )
}
export default Header
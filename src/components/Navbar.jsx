import { useState } from "react"

const Navbar = () => {
    return(
        <nav className="h-14 text-slate-100 shadow-xl/20">
            <div className="align-middle flex px-4 items-center h-full justify-between">
                <a href="/" className="text-cyan-300 text-lg font-semibold">Ashiya</a>
                <ul className="text-slate-300 flex">
                    <li><a href="/" autoFocus className="mx-2 hover:text-cyan-300 focus:text-cyan-300 active:text-red-400">Home</a></li>
                    <li><a href="#about" className="mx-2 hover:text-cyan-300 focus:text-cyan-300 active:text-red-400">About</a></li>
                    <li><a href="#work" className="mx-2 hover:text-cyan-300 focus:text-cyan-300 active:text-red-400">Work</a></li>
                    <li><a href="#skills" className="mx-2 hover:text-cyan-300 focus:text-cyan-300 active:text-red-400">Skills</a></li>
                </ul>
            </div>            
        </nav>
    )
}

export default Navbar
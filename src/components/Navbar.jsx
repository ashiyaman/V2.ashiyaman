import { useState } from "react"

const Navbar = () => {
    return(
        <nav className="h-14 text-slate-100 shadow-xl/20">
            <div className="align-middle flex px-4 items-center h-full justify-between">
                <a href="/" className="text-cyan-300 text-lg font-semibold">Ashiya</a>
                <ul className="text-slate-300 flex">                   
                    <li><a href="#about" className="uppercase font-bold text-shadow-xs mx-2 hover:text-cyan-300 focus:text-cyan-300">About</a></li>
                    <li><a href="#work" className="uppercase font-bold text-shadow-xs mx-2 hover:text-cyan-300 focus:text-cyan-300">Work</a></li>
                    <li><a href="#skills" className="uppercase font-bold text-shadow-xs mx-2 hover:text-cyan-300 focus:text-cyan-300">Skills</a></li>
                    <li><a href="#resume" className="uppercase font-bold text-shadow-xs mx-2 hover:text-cyan-300 focus:text-cyan-300">Resume</a></li>
                </ul>
            </div>            
        </nav>
    )
}

export default Navbar
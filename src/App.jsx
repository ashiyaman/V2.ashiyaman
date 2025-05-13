import About from "./components/About"
import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Resume from "./components/Resume"
import Skills from "./components/Skills"
import Work from "./components/Work"

function App() {
  return (
    <div className="dark:bg-slate-900 h-screen w-full">
        <Navbar />
        <Home />
        <About />
        <Work />
        <Skills />
        <Resume />
        <Contact />
    </div>
  )
}

export default App

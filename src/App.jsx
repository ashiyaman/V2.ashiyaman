import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Work from "./components/Work"

function App() {
  return (
    <div className="dark:bg-slate-900 h-screen w-full">
        <Navbar />
        <Home />
        <Work />
        <Contact />
    </div>
  )
}

export default App

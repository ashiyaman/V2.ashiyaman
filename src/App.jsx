import Contact from "./components/Contact"
import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="dark:bg-slate-900 h-screen w-full">
        <Navbar />
        <Home />
        <Contact />
    </div>
  )
}

export default App

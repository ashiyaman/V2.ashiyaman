import About from "./components/About"
import Blogs from "./components/Blogs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Resume from "./components/Resume"
import ScrollToTop from "./components/ScrollToTop"
import Skills from "./components/Skills"
import Work from "./components/Work"

function App() {
  return (
    <div className="dark:bg-slate-900 h-screen w-full py-5">
        <Navbar />
        <Home />
        <About />
        <Work />
        <Skills />
        <Resume />
        <Blogs />
        <Footer />
        <ScrollToTop />
        <Contact />
    </div>
  )
}

export default App

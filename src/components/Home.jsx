import { useEffect, useState } from "react";

const Home = () => {
  const text = 'I  build things for the web, front to back.'
  const [typingText, setTypingText] = useState('')
  useEffect(() => {   
    let i = 0
    const interval = setInterval(() => {
      if(i < text.length - 1){
        setTypingText(prev => prev + text[i])
        i++
      }
      else {
        clearInterval(interval)
      }
    }, 100)
    return () => clearInterval(interval)
  }, [])
  return (           
    <section className="py-4 px-10 md:py-10 bg-inherit">
        <p className="text-slate-400 py-3 text-xl md:text-3xl">
        <b>Hi, My Name is</b>{" "}
        </p>
        <h1 className="text-red-400 md:text-6xl py-3 md:py-6 lg:py-1 text-4xl"><b>Ashiya Banu.</b></h1>
        <h2 className="typing md:text-4xl text-cyan-300 py-3 lg:py-1 md:py-8 font-semibold text-2xl">{typingText}</h2>
        <p className="text-slate-400 py-3 pr-10 md:pt-3 md:pb-6 text-xl">
            I’m a MERN stack developer who loves turning ideas into fast,
            functional, and beautiful web apps. Whether it’s crafting React UIs or
            building powerful APIs.
        </p>        
        
        <a
          href="#resume"
          aria-label="See Ashiya's Projects"
          className="inline-block group transition-all duration-300"
        >
          <div className="rounded-lg p-[2px] bg-gradient-to-r from-red-400 via-purple-500 to-cyan-400 hover:bg-none">
            <div className="bg-slate-900 rounded-lg">
              <button className="uppercase text-slate-300 hover:text-slate-900 font-semibold text-lg py-4 px-8 rounded-lg w-full transition-all duration-300 hover:bg-gradient-to-r hover:from-red-400 hover:via-purple-500 hover:to-cyan-400">
                View My Work
              </button>
            </div>
          </div>
        </a>

    </section>                
  );
};

export default Home;

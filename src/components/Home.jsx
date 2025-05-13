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
    <section className="my-8 px-5 md:my-16 lg:my-20">
        <p className="text-slate-400 py-3 md:py-5 text-xl md:text-3xl lg:py-8">
        <b>Hi, My Name is</b>{" "}
        </p>
        <h1 className="text-red-400 md:text-8xl py-4 md:py-5 text-6xl lg:text-10xl lg:py-10"><b>Ashiya Banu.</b></h1>
        <h2 className="typing md:text-4xl text-cyan-300 py-3 lg:py-8 md:py-5 lg:text-4xl font-semibold text-2xl">{typingText}</h2>
        <p className="text-slate-400 py-3 pr-10 md:py-5 lg:py-8 md:text-2xl lg:text-4xl text-xl">
            I’m a MERN stack developer who loves turning ideas into fast,
            functional, and beautiful web apps. Whether it’s crafting React UIs or
            building powerful APIs.
        </p>
    </section>                
  );
};

export default Home;

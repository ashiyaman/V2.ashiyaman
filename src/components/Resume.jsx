const Resume = () => {
  return (
    <section id="resume" className="py-4 px-7 bg-inherit">
      <div className="w-14/15 text-center">
        <div className="flex items-center justify-center mb-6">
          <h3 className="text-slate-100 bg-violet-950 shadow-xl uppercase font-semibold px-6 py-4 text-lg rounded-md">
            Resume
          </h3>
          <span className="w-full h-[2px] bg-gradient-to-r from-red-400 via-purple-500 to-cyan-400"></span>
        </div>

        <a
  href="https://drive.google.com/file/d/1CKdTcnO4LN6eLop-1SmK5YReVbSVXWCs/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Download Ashiya's Resume"
>
  <div className="inline-block rounded-lg bg-gradient-to-r from-red-400 via-purple-500 to-cyan-400 p-[2px] hover:bg-none transition-all duration-300">
    <div className="bg-slate-900 rounded-lg">
      <button className="bg-transparent text-slate-100 font-semibold text-lg py-3 px-6 rounded-lg w-full transition-all duration-300 hover:bg-gradient-to-r hover:from-red-400 hover:via-purple-500 hover:to-cyan-400 hover:text-slate-900">
        View Resume
      </button>
    </div>
  </div>
</a>


      </div>
    </section>
  );
};

export default Resume;

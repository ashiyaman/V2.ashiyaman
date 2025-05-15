const Blogs = () => {
  return (
    <section id="blogs" className="py-4 px-7 bg-inherit">
      <div className="flex items-center gap-4 py-3 w-7/8">
        <h3 className="text-slate-100 bg-violet-950 shadow-xl uppercase font-semibold px-6 py-4 text-lg rounded-md">
          Blogs
        </h3>
        <span className="w-full h-[2px] bg-gradient-to-r from-red-400 via-purple-500 to-cyan-400"></span>
      </div>
      <div className="flex flex-col md:flex-row text-slate-300 my-3">
        <div className="md:w-1/2 p-2 my-2 rounded-md md:mx-3 bg-slate-800 shadow-2xl">
            <img src="../../../src/assets/blog1.png" alt="JS-Execution Context Blog image" className="rounded-md"/>
            <div className="my-2 p-1">
                <p className="text-cyan-300"><span>May 15, 2025</span></p>
                <h3 className="font-bold text-xl hover:text-red-400">
                    <a 
                        href="https://js-execution-context-bts.hashnode.dev/preview/6824b98daea88009d3a961e8" 
                        target="_blank"
                        aria-label="Blog website">
                    JS-Execution Context
                    </a>
                </h3>
                <p className="text-cyan-300 my-2">3 Min Read</p>
                <p>
                    Ever wondered what actually happens when your JavaScript code runs? It's like magic - but there's a whole system working behind...
                </p>
            </div>
        </div>

        <div className="md:w-1/2 p-2 my-2 rounded-md md:mx-3 bg-slate-800 shadow-2xl">
            <img src="../../../src/assets/blog2.jpeg" alt="JS-Execution Context Blog image" className="rounded-md h-1/3 w-full"/>
            <div className="my-2 p-1">
                <p className="text-cyan-300"><span>May 16, 2025</span></p>
                <h3 className="font-bold text-xl hover:text-red-400">
                    <a 
                        href="https://hashnode.com/preview/682540dd27651ef4af977b95" 
                        target="_blank"
                        aria-label="Blog website">
                        Understanding Asynchronous Programming: Callbacks, Promises, and async/await
                    </a>
                </h3>
                <p className="text-cyan-300 my-2">3 Min Read</p>
                <p className="h-fit">
                    In modern JavaScript development, handling asynchronous operations is a core skill...
                </p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;

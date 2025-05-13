const Work = () => {
  return (
    <section id="work" className="py-4 px-7 bg-inherit">
      <div className="my-3">
        <div className="flex items-center gap-4">
          <h3 className="text-slate-100 bg-violet-950 shadow-xl uppercase font-semibold px-6 py-4 text-lg rounded-md">
            Projects
          </h3>
          <span className="w-full h-[2px] bg-gradient-to-r from-red-400 via-purple-500 to-cyan-400"></span>
        </div>

        <div className="flex flex-col gap-6 py-6 w-10/12">
          <div className="mx-auto">
            <div className="rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-500 border border-slate-700">
              <div className="flex px-4 py-2 items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                <div className="h-3 w-3 rounded-full bg-cyan-400"></div>
              </div>

              <div className="text-center text-cyan-300 text-lg lg:text-xl px-4">
                Online Plant Store
              </div>
              <div className="border-t border-purple-900 px-4 py-5 w-full">
                <code className="w-full font-mono text-xs sm:text-sm md:text-base text-slate-200 block whitespace-pre-wrap break-words overflow-auto">
                  {`const project = {
  Name: 'Sproutnest App',
  Tools: ['React JS', 'Redux Thunk', 'Mongo DB', 'Express', 'Node JS', 'Bootstrap'],
  Description: 'Sprout Nest is an online store for plants and gardening products. I developed the front-end using React.js, Bootstrap, Redux, and Redux Thunk, implementing features like product browsing, filtering, cart, and checkout. I also built the back-end with Node.js and Express, and connected it to the front-end using Redux Thunk for API integration.'
}`}
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-6 w-10/12">
          <div className="mx-auto">
            <div className="rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-500 border border-slate-700">
              <div className="flex px-4 py-2 items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                <div className="h-3 w-3 rounded-full bg-cyan-400"></div>
              </div>

              <div className="text-center text-cyan-300 text-lg lg:text-xl px-4">
                Recipe Finder App
              </div>
              <div className="border-t border-purple-900 px-4 py-5 w-full">
                <code className="w-full font-mono text-xs sm:text-sm md:text-base text-slate-200 block whitespace-pre-wrap break-words overflow-auto">
                  {`const project = {
  Name: 'DishDeck',
  Tools: ['React JS', 'Redux', 'Redux Thunk', 'Axios', 'Mongo DB', 'Express', 'Node JS', 'Bootstrap'],
  Description: 'DishDeck is a powerful and user-friendly recipe organizer designed for food enthusiasts. I developed the front-end using React.js, Bootstrap, Redux, and Redux Thunk. The app allows users to search, filter, and view detailed recipes with ingredients and instructions. I built the back-end with Node.js and Express, using Axios for data fetching and MongoDB for storing user-generated recipes and favorites.'
}`}
                </code>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 py-6 w-10/12">
          <div className="mx-auto">
            <div className="rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-500 border border-slate-700">
              <div className="flex px-4 py-2 items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                <div className="h-3 w-3 rounded-full bg-green-400"></div>
                <div className="h-3 w-3 rounded-full bg-cyan-400"></div>
              </div>

              <div className="text-center text-cyan-300 text-lg lg:text-xl px-4">
                Event Management
              </div>
              <div className="border-t border-purple-900 px-4 py-5 w-full">
                <code className="w-full font-mono text-xs sm:text-sm md:text-base text-slate-200 block whitespace-pre-wrap break-words overflow-auto">
                  {`const project = {
  Name: 'Eventura',
  Tools: ['React JS', 'Mongo DB', 'Express', 'Node JS', 'Bootstrap'],
  Description: 'Eventura is an intuitive event listing app that allows users to discover and explore local events based on their interests. I developed the front-end using React.js and Bootstrap, and the back-end using Node.js and Express. Users can browse event categories, view event details, and save favorite events. The application uses MongoDB for data storage and offers a seamless experience with responsive design and smooth navigation.'
}`}
                </code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;

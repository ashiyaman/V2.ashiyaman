const About = () => {
  return (
    <section id="about" className="py-4 px-7 text-slate-400 bg-inherit">
      <div className="flex items-center gap-4 py-3 w-7/8">
        <h3 className="text-slate-100 bg-violet-950 shadow-xl uppercase font-semibold px-6 py-4 text-lg rounded-md">
          About
        </h3>
        <span className="w-full h-[2px] bg-gradient-to-r from-red-400 via-purple-500 to-cyan-400"></span>
      </div>
      <div className="pr-8 text-xl my-4 w-full">
        <p className="py-4">
          Hello! I'm Ashiya — a full-stack developer fluent in JavaScript and
          passionate about building smooth, scalable web apps using the MERN
          stack (MongoDB, Express, React, Node.js).
        </p>
        <p className="py-4">
          I turn complex ideas into clean code and intuitive interfaces. From
          backend APIs to responsive frontends, I love crafting digital
          experiences that just work — fast, secure, and user-friendly.
        </p>
        <p className="py-4">
          Currently, I’m focused on sharpening my skills in modern frameworks
          and deploying real-world projects. Always learning, always building.
        </p>
      </div>
    </section>
  );
};

export default About;

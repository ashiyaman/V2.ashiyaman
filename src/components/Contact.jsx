const Contact = () => {
    return (
        <section className="fixed bottom-0 flex-col right-2 md:right-5 lg:right-8 z-10 flex items-center justify-center align-middle">
            <ul className="flex flex-col gap-4">
              <li>
                  <a href="https://github.com/ashiyaman" target="_blank" aria-label="GitHub">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      className="w-7 h-7 text-cyan-300 hover:text-red-400 focus:text-red-400"
                  >
                      <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 2C6.48 2 2 6.48 2 12a9.999 9.999 0 007 9.54c.51.09.7-.22.7-.49v-1.71c-2.86.62-3.46-1.38-3.46-1.38-.46-1.17-1.12-1.48-1.12-1.48-.91-.62.07-.61.07-.61 1 .07 1.52 1.02 1.52 1.02.89 1.52 2.34 1.08 2.91.82.09-.65.35-1.08.63-1.33-2.28-.26-4.67-1.14-4.67-5.06 0-1.12.4-2.03 1.04-2.74-.1-.26-.45-1.3.1-2.7 0 0 .85-.27 2.78 1.03a9.56 9.56 0 015.06 0c1.93-1.3 2.78-1.03 2.78-1.03.55 1.4.2 2.44.1 2.7.65.71 1.04 1.62 1.04 2.74 0 3.93-2.4 4.8-4.68 5.05.36.31.68.91.68 1.83v2.72c0 .27.19.59.7.49A10 10 0 0022 12c0-5.52-4.48-10-10-10z"
                      />
                  </svg>
                  </a>
              </li>
              <li>
                  <a
                  href="https://www.linkedin.com/in/ashiya-amanulla/"
                  target="_blank"
                  aria-label="LinkedIn"
                  >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      className="w-7 h-7 text-cyan-300 hover:text-red-400 focus:text-red-400"
                  >
                      <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-12h4v2a4 4 0 014-2zM2 9h4v12H2zM4 4a2 2 0 100 4 2 2 0 000-4z"
                      />
                  </svg>
                  </a>
              </li>
              <li   >
                  <a href="https://codepen.io/ashiya" target="_blank" aria-label="CodePen">
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      viewBox="0 0 24 24"
                      className="w-7 h-7 text-cyan-300 hover:text-red-400 focus:text-red-400"
                  >
                      <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 8.25l9.75-6 9.75 6v7.5l-9.75 6-9.75-6v-7.5zM12 2.25v19.5M2.25 8.25l9.75 6 9.75-6"
                      />
                      <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 15.75l9.75-6 9.75 6"
                      />
                  </svg>
                  </a>
              </li>
            </ul>
            <div className="w-px h-50 bg-cyan-300 text-center"></div>
        </section>
    )
}

export default Contact
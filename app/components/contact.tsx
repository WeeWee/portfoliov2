import { motion } from "framer-motion";
export function Contact() {
  const contactAnimation = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 3.2,
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };
  return (
    <motion.div
      variants={contactAnimation}
      initial="hidden"
      animate="visible"
      className="mt-8 mb-4"
      id="contact"
    >
      <h3 className="mb-3 text-xl font-medium">Contact me</h3>

      <div className="flex items-center max-w-sm gap-10 mx-auto md:justify-between">
        <a
          href="mailto:info@adamkindberg.com"
          className=" hover:cursor-pointer hover:text-purple-400"
        >
          Reach out on mail
        </a>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/adam-kindberg/"
            className="flex items-center justify-center w-10 h-10 text-blue-400 bg-gray-100 rounded-full dark:bg-gray-300 group hover:bg-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="text-black w-7 h-7 group-hover:text-white"
            >
              <title>Linkedin</title>
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
          <a
            href="https://github.com/WeeWee"
            className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full hover:bg-black dark:bg-black dark:hover:bg-white group "
          >
            <div
              id="github-icon"
              title="github-icon"
              className="  bg-[url('/github-mark.png')] group-hover:bg-[url('/github-mark-white.png')] dark:group-hover:bg-[url('/github-mark.png')] dark:bg-[url('/github-mark-white.png')] rounded-full w-7 h-7 bg-cover bg-no-repeat"
            />
          </a>
          {/*hover:bg-black */}
        </div>
      </div>
    </motion.div>
  );
}

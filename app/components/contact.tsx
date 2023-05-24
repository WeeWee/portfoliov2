import { motion } from "framer-motion";

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: 4,
        /* ease: "easeOut" */ type: "spring",
        damping: 20,
        stiffness: 300,
        duration: 2.4,
      }}
      className="mt-8"
      id="contact"
    >
      <h2 className="text-xl font-medium">Contact me</h2>

      <div className="flex items-center justify-between max-w-md mx-auto">
        <div>
          <a
            href="https://www.linkedin.com/in/adam-kindberg/"
            className="flex items-center justify-center w-10 h-10 text-blue-400 bg-gray-300 rounded-full group hover:bg-blue-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              className="text-black w-7 h-7 group-hover:text-white"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
            </svg>
          </a>
          <p>Socials</p>
        </div>
        <p>
          Mail me @{" "}
          <a href="mailto:info@adamkindberg.com" className="">
            info@adamkindberg.com
          </a>
        </p>
      </div>
    </motion.div>
  );
}

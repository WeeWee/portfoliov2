import { Link } from "@remix-run/react";
import { motion } from "framer-motion";
import { ThemeSwitch } from ".";
export function Navbar() {
  const navbarAnimation = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeInOut",
        duration: 1,
      },
    },
  };
  return (
    <motion.nav
      variants={navbarAnimation}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-between pt-4"
    >
      <div className="flex items-end space-x-2 ">
        <motion.div
          animate={{
            backgroundImage: [
              "linear-gradient(to top right,#948afe, #fe8aca)",
              "linear-gradient(to top right, #948afe, #ba8afe)",
              "linear-gradient(to top right, #948afe, #ba8afe)",
              "linear-gradient(to top right,#948afe, #f48afe)",
            ],

            transition: {
              ease: "easeInOut",
              repeat: Infinity,
              duration: 2.5,
            },
          }}
          className="w-8 h-8 rounded-full  from-orange-400 to-yellow-200 bg-gradient-to-tr"
        ></motion.div>
        <h3 className="text-lg font-medium ">
          {/* <img
					src={ImageLink}
					className="object-cover object-center w-12 h-12 rounded-full"
					alt="Adam"
				/> */}
          Adam Kindberg
        </h3>
      </div>
      <ul className=" md:justify-between md:items-center min-w-[200px] w-1/5 max-w-sm hidden md:flex">
        <li>
          <Link to="#works">Works</Link>
        </li>
        <li>
          <Link to="#contact">Contact</Link>
        </li>
        <ThemeSwitch />
      </ul>
    </motion.nav>
  );
}

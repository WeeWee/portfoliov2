import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";
export function Projects() {
  const projects = [
    {
      title: "Work in progress",
      description: "Projects are in working phase",
      link: "#",
      image: "/car-rental-image.webp",
      technologies: ["Remix.JS", "TailwindCSS", "Framer motion"],
    },
  ];
  return (
    <div id="works" className="grid grid-cols-1 gap-4 mt-10 lg:grid-cols-2">
      {projects.map((project, index) => (
        <motion.a
          href={project.link}
          key={`${project.title}-${index}`}
          initial={{ opacity: 0, y: 55 }}
          animate={{
            opacity: 1,
            y: 0,

            transition: { ease: "easeInOut", duration: 1, delay: 2.8 },
          }}
          className="relative h-full overflow-hidden rounded-3xl hover:cursor-pointer"
        >
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2, ease: "easeInOut" },
            }}
          >
            <div className="absolute text-white bottom-3 inset-x-2 md:left-10">
              <h4 className="text-xl font-medium capitalize">
                {project.title}
              </h4>
              <div className="flex gap-2 text-xs">
                {project.technologies.map((technology, index) => (
                  <motion.p
                    animate={{
                      backgroundImage: [
                        "linear-gradient(to right, #948afe, #ba8afe)",
                        "linear-gradient(to right, #948afe, #d78afe)",
                        "linear-gradient(to right, #948afe, #ba8afe)",
                      ],

                      transition: {
                        ease: "easeIn",
                        repeat: Infinity,
                        duration: 2.5,
                      },
                    }}
                    className="rounded-2xl bg-gradient-to-r from-[#948afe] to-[#fe8aca]  p-1 capitalize"
                    key={index}
                  >
                    {technology}
                  </motion.p>
                ))}
              </div>
            </div>
            <motion.img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="object-cover object-center w-full h-full max-h-96"
            />
            {/* <div className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full top-6 right-6 ">
							<ArrowUpRightIcon className="w-4 h-4 text-black" />
						</div> */}
          </motion.div>
        </motion.a>
      ))}
    </div>
  );
}

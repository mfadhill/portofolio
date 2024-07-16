import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";

const Experiece = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Experiece
      </motion.h2>
      <div>
        {EXPERIENCES.map((Experiece, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400"> {Experiece.year}</p>
            </motion.div>
            <div className="w-full lg:w-1/2">
              <h6 className="mb-2 font-semibold">
                {Experiece.role} - {""}
                <span className="text-sm text-purple-100">
                  {Experiece.company}
                </span>
              </h6>
              <div>
                <motion.p
                  whileInView={{ opacity: 1, x: 0 }}
                  initial={{ opacity: 0, x: 100 }}
                  transition={{ duration: 1 }}
                  className="mb-4 text-neutral-400"
                >
                  {Experiece.description}
                </motion.p>
                {Experiece.technologies.map((technologies, index) => (
                  <span
                    key={index}
                    className="text-sm mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-800 "
                  >
                    {technologies}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiece;

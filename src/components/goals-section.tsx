import { Goals } from "../utils";
import { motion } from "framer-motion";

export const GoalsSection = () => {
  return (
    <div className="lg:w-[82%] w-[85%] mx-auto">
      {Goals.map((goal, index) => (
        <motion.div
          initial={{
            opacity: 0,
            translateY: "70px",
          }}
          whileInView={{
            opacity: 1,
            translateY: 0,
            transition: {
              type: "spring",
              stiffness: 120,
              damping: 15,
              duration: 0.6,
              delay: index * 0.2,
            },
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          key={index}
          className={`flex flex-col-reverse md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } items-center lg:mb-[-100px] md:mb-[10px] justify-between gap-[7%]`}
        >
          <div className="lg:w-[43%] md:w-[43%] w-full h-auto lg:pb-6 pb-12">
            <div>{goal.title}</div>
            <div>{goal.description}</div>
            <a
              href="#"
              id="section-links"
              className="mt-4 lg:inline-flex flex lg:justify-start justify-center items-center text-teal-1 md:justify-start"
            >
              <p className="font-tomato-medium text-[18px]">
                Start Investing Now
              </p>
              <div className="arrows -ml-6">
                <span className="ml-2">&rarr;</span>
                <span className="ml-2">&rarr;</span>
              </div>
            </a>
          </div>
          <div
            className={`${index === 2 || index === 3 ? "w-[47%]" : "w-[50%]"}`}
          >
            <div>
              <img
                src={goal.image}
                alt=""
                className="w-full h-auto object-contain object-center"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

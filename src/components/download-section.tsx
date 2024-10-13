import { inViewVariant } from "@/config/motion.variant";
import Apple from "@assets/images/svg/download-apple.svg";
import GooglePlay from "@assets/images/svg/download-google.svg";
import Phone from "@assets/images/svg/phone2.svg";
import { motion } from "framer-motion";

export const DownloadSection = () => {
  return (
    <motion.div
      variants={inViewVariant}
      initial="hidden"
      whileInView="inView"
      viewport={{
        once: true,
        margin: "-200px",
      }}
      className="lg:px-20 md:px-8 px-6 mt-[90px]"
    >
      <div className="w-full lg:h-[394px] md:h-[394px] h-[400px] bg-teal-4 rounded-[50px] lg:px-8 lg:py-8 md:px-8 md:py-8 px-4 py-4 flex lg:flex-row md:flex-row flex-col justify-between items-center">
        <div className="lg:w-[50%] md:w-[50%] w-full lg:mt-12 md:mt-12 mt-8">
          <p className="text-teal-1 lg:text-left md:text-left text-center font-dmsans-medium">
            Download The Rise App
          </p>
          <h2 className="lg:text-[32px] md:text-[28px] text-[18px] font-tomato-semibold text-black-2 tracking-tighter leading-[120%] lg:w-[80%] lg:min-w-[450px] md:w-[90%] md:min-w-[300px] w-[90%] min-w-[250px] lg:max-w-0 mx-auto lg:mx-0 md:mx-0  max-w-[250px] mt-4 lg:text-left md:text-left text-center">
            Join our 100,000 users investing and setting long term goals!
          </h2>
          <p className="lg:mt-4 md:mt-4 mt-3 text-black-1 lg:text-left md:text-left text-center lg:text-[16px] md:text-[16px] text-[13px] font-dmsans-medium">
            Dollar investments that help you grow.
          </p>
          <div className="flex items-center lg:justify-start md:justify-start justify-center gap-4 lg:mt-10 md:mt-10 mt-[-15px]">
            <img
              src={Apple}
              alt=""
              className="lg:w-[150px] w-[120px] h-[120px]"
            />
            <img
              src={GooglePlay}
              alt=""
              className="lg:w-[150px]  w-[120px] h-[120px]"
            />
          </div>
        </div>
        <div className="lg:mt-6 md:mt-6 mt-[-10px] lg:pr-10 md:pr-10">
          <img src={Phone} alt="" />
        </div>
      </div>
    </motion.div>
  );
};

import GooglePlay from "../assets/images/svg/download-google.svg";
import Apple from "../assets/images/svg/download-apple.svg";
import Phone from "../assets/images/svg/phone.svg";
import { SupportList } from "../utils";
import { easeIn, motion } from "framer-motion";
import { bounceVariant } from "@/config/motion.variant";

export const HeroSection = () => {
  const getDimensions = (id: number) => {
    switch (id) {
      case 2:
        return { width: "178.24px", height: "80.33px" };
      case 3:
        return { width: "124.27px", height: "60.25px" };
      case 4:
        return { width: "53px", height: "58px" };
      default:
        return { width: "90px", height: "38px" };
    }
  };

  return (
    <div className="pt-24 lg:pt-0 md:pt-24">
      <div className="flex lg:flex-row flex-col justify-between items-center lg:px-20 px-8 pt-10 relative h-[500px]">
        <div className="lg:max-w-xl md:max-w-xl lg:ml-[-3rem] lg:mx-0 max-w-md sm:px-8 md:px-12 lg:px-12 mx-auto flex flex-col items-center lg:items-start">
          <div className="relative text-left lg:text-left">
            <h1 className="lg:text-[56px] md:text-[56px] text-[35px] xs:text-[30px] sm:text-[40px] font-tomato-semibold lg:leading-[61px] leading-[90%] tracking-tight text-teal-1">
              <div className="anime-1 overflow-hidden">
                <h1>Dollar investments</h1>
              </div>
              <div className="anime-1 overflow-hidden">
                <h1>that help you grow</h1>
              </div>
            </h1>
            <div className="w-[10px] h-[10px] lg:bg-teal-2 bg-teal-3 rounded-full absolute lg:bottom-8 bottom-4 lg:right-1 right-[1px]" />
          </div>
          <motion.p
            initial={{
              opacity: 0,
              translateY: "20px",
            }}
            animate={{
              opacity: 1,
              translateY: 0,
              transition: {
                easings: easeIn,
                duration: 0.7,
              },
            }}
            className="font-dmsans-medium text-center lg:text-left lg:text-[16px] text-[14px] text-black-1 mt-4 max-w-lg lg:pr-20"
          >
            We put your money in high-quality assets that help you build wealth
            and achieve your financial goals.
          </motion.p>
          <div className="flex items-center lg:justify-start justify-center gap-4 lg:mt-10 md:mt-10 mt-[-10px]">
            <img
              src={Apple}
              alt=""
              className="lg:w-full lg:h-full w-[120px] h-[120px]"
            />
            <img
              src={GooglePlay}
              alt=""
              className="lg:w-full lg:h-full w-[120px] h-[120px]"
            />
          </div>
        </div>

        <div className="lg:mr-[67px] lg:mt-0 mt-8 flex-none lg:shadow-none shadow-[0_12px_24px_rgba(64,187,195,0.15)]">
          <img
            src={Phone}
            alt="Phone"
            className="lg:w-full lg:h-full object-center md:w-full md:h-full w-[170px]"
          />
        </div>

        <motion.div
          variants={bounceVariant}
          initial="hidden"
          animate="visible"
          className="lg:w-[32px] lg:h-[32px] md:w-[32px] md:h-[32px] w-[20px] h-[20px] bg-teal-3 absolute lg:top-[65px] top-[55px] lg:left-[140px] lg:opacity-100 opacity-[30%] left-3 rounded-full"
        />
        <motion.div
          variants={bounceVariant}
          initial="hidden"
          animate="visible"
          className="w-[36px] h-[36px] lg:w-[56px] lg:h-[56px] md:w-[56px] md:h-[56px] bg-teal-3 absolute top-[5px] right-[30px] lg:top-[30px] lg:opacity-100 opacity-[30%] lg:right-[490px] rounded-full"
        />
        <motion.div
          variants={bounceVariant}
          initial="hidden"
          animate="visible"
          className="w-[36px] h-[36px] lg:w-[56px] lg:h-[56px] md:w-[56px] md:h-[56px] bg-teal-3 absolute lg:bottom-[-55px] bottom-[-120px] lg:opacity-100 opacity-[30%] lg:left-[210px] left-[65px] rounded-full"
        />
        <motion.div
          variants={bounceVariant}
          initial="hidden"
          animate="visible"
          className="lg:w-[32px] lg:h-[32px] md:w-[32px] md:h-[32px] w-[20px] h-[20px] bg-teal-3 absolute bottom-[-1px] lg:right-[400px] lg:opacity-100 opacity-[30%] right-[360px] rounded-full"
        />
        <motion.div
          variants={bounceVariant}
          initial="hidden"
          animate="visible"
          className="w-[36px] h-[36px] lg:w-[56px] lg:h-[56px] md:w-[56px] md:h-[56px] bg-teal-3 absolute bottom-[-35px] lg:right-[90px] lg:opacity-100 opacity-[30%] right-[50px] rounded-full"
        />
      </div>
      <div className="flex flex-col justify-start px-8 lg:mt-0 md:mt-[370px] mt-[300px]">
        <p className="text-primary-400 font-dmsans-medium text-[18px  lg:hidden">
          We are supported by
        </p>
        <div className="flex lg:justify-center items-center lg:mt-[100px] lg:gap-4 gap-2">
          {SupportList.map((elem) => {
            const { width, height } = getDimensions(elem.id);
            return (
              <div
                key={elem.id}
                style={{ width, height }}
                className="text-primary-400 opacity-95 bg-blend-lighten"
              >
                <img src={elem.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

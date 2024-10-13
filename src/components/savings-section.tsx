import Button from "@/lib/ui/button/button";
import Phone from "../assets/images/png/phone.png";
import { easeIn, motion } from "framer-motion";
import { bounceVariant, inViewVariant } from "@/config/motion.variant";

export const SavingSection = () => {
  return (
    <motion.div
      variants={inViewVariant}
      initial="hidden"
      whileInView="inView"
      viewport={{
        once: true,
        margin: "-200px",
      }}
      className="px-32 py-20 flex items-center justify-between"
    >
      <div className="w-[40%]">
        <div className="w-[316.31px] h-[508.71px] relative">
          <img src={Phone} className="w-full h-full object-cover" />
          <div className="absolute flex flex-col top-[54%] left-5 justify-center">
            <h3 className="z-[200] text-primary-100 font-tomato-bold text-[16.5px] text-white">
              Build Wealth
            </h3>
            <p className="font-dmsans-light leading-[18.5px] text-[12px] text-white">
              Invest for long-term goals like retirement with
              <br /> this plan. It’s your financial freedom partner.
            </p>
            <div className="flex mt-2 justify-between items-center">
              <a
                href="#"
                className="flex justify-between items-center text-primary-100"
              >
                <p className="font-tomato-medium text-[12.04px]">
                  Start Investing Now
                </p>
              </a>
              <a href="#">
                <span className="mr-[-40px] text-[14.04px] text-primary-100">
                  &rarr;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%]">
        <p className="font-tomato-medium text-black-2 tracking-tighter text-[18px]">
          The Rise App
        </p>
        <h1 className="font-tomato-semibold text-[40px] text-black-2 tracking-tighter">
          Save for your <span className="text-indigo-1">future</span>
        </h1>
        <p className="font-tomato-light text-black-2 leading-[24px] mt-1">
          With Rise, you achieve your financial goals faster. Save <br /> for
          school, your home, vacations, your children’s
          <br /> future and more.
        </p>
        <Button title="Start Saving" variant="solid" className="mt-6" />
      </div>
    </motion.div>
  );
};

import { inViewVariant } from "@/config/motion.variant";
import Button from "@/lib/ui/button/button";
import CommunityImg from "@assets/images/png/group.png";
import { easeIn, motion } from "framer-motion";

export const CommunitySection = () => {
  return (
    <motion.div
    variants={inViewVariant}
    initial="hidden"
    whileInView="inView"
    viewport={{
      once: true,
      margin: "-200px",
    }} className="lg:px-20 px-8 mt-[100px] lg:gap-0 md:gap-0 gap-6 flex lg:flex-row flex-col-reverse justify-between items-center">
      <div className="lg:w-[50%] md:w-[50%] w-full flex flex-col lg:justify-start justify-start">
        <h1 className="lg:text-[40px] md:text-[32px] text-[32px] lg:text-left text-center lg:leading-[42px] leading-[32px] font-tomato-semibold tracking-tighter">
          Join The Rise Community
        </h1>
        <p className="lg:w-[80%] md:w-full md:min-w-full lg:min-w-[85%] lg:text-left lg:mx-0 text-center w-full md:mx-auto mx-auto text-black-2 mt-2 text-[16px] font-dmsans-light leading-[24px]">
          If you want to go far, go together. Our Telegram community surrounds
          you with others who can help you along your financial journey with
          tips, support, advice and learning. It's completely free and open to
          new and seasoned investors.
        </p>
        <Button
          title="Join our Community"
          variant="filled"
          className="mt-6 lg:w-[236px] md:w-[236px] lg:mx-0 mx-auto"
        />
      </div>
      <div>
        <div className="lg:h-[386px] md:h-[300px] h-[230px]">
          <img
            src={CommunityImg}
            alt=""
            className="w-full h-full object-contain object-center"
          />
        </div>
      </div>
    </motion.div>
  );
};

import { AssetOptions } from "@/utils";
import { motion } from "framer-motion";
import { useCallback } from "react";

export const AssetSection = () => {
  const bgColors = ["bg-orange-4", "bg-indigo-4", "bg-teal-4"];
  const isDesktop = window.matchMedia("(min-width: 768px)").matches;

  const getInitialState = useCallback(
    (index: number) => {
      if (!isDesktop) return {};

      if (index === 0) {
        return {
          translateX: "385px",
          opacity: 0,
        };
      }
      if (index === 2) {
        return {
          translateX: "-385px",
          opacity: 0,
        };
      }

      return {};
    },
    [isDesktop]
  );

  return (
    <div className="lg:px-20 px-8">
      <div className="justify-center flex flex-col items-center mt-24">
        <h1 className="font-tomato-semibold lg:text-[40px] text-[32px] tracking-tighter">
          Asset Classes
        </h1>
        <p className="lg:leading-[24px] md:leading-[24px] leading-[18px] text-center font-dmsans-regular text-black-2 text-[16px]">
          It’s your money, choose where you invest it
        </p>
      </div>
      <div className="flex lg:flex-row md:flex-row flex-col justify-between mt-12 lg:gap-0 md:gap-0 gap-8 relative">
        {AssetOptions.map((asset, index) => (
          <motion.div
            key={index}
            initial={getInitialState(index)}
            whileInView={{
              opacity: 1,
              translateX: 0,
              transition: {
                type: "spring",
                stiffness: 120,
                damping: 15,
                duration: 0.6,
              },
            }}
            viewport={{
              once: true,
              margin: "-400px",
            }}
            className={`lg:w-[31%] md:w-[32.5%] w-full h-[515px] relative border-[2px] border-primary-200 rounded-[5px] overflow-hidden ${
              index === 1 && "z-[500]"
            } ${index === 0 && "anime-right"}`}
          >
            <div
              className={`w-full h-[160px] absolute left-0 rounded-[16px] z-[100] ${
                bgColors[index % bgColors.length]
              }`}
            />
            <div className="w-full flex-grow bg-primary-100 justify-start items-center flex flex-col h-[300px] relative mt-[130px] left-0 z-[200]">
              <div className="border-[15px] border-[#FFF] mt-[-50px] rounded-full">
                <img src={asset.image} alt="" />
              </div>
              <h2 className="text-black-1 text-[24px] font-tomato-semibold tracking-tight">
                {asset.title}
              </h2>
              {asset.description}
              <div className="mt-4 flex-grow">
                <p className="font-dmsans-light text-primary-300 lg:text-[16px] text-[13px]">
                  Historical returns:
                  <span className="text-black-1 ml-1">
                    {asset.returns} per annum
                  </span>
                </p>
                <p className="font-dmsans-light text-[13px] leading-[30px] text-primary-300 mb-4 lg:text-[16px] text-center">
                  Risk Level:
                  <span className="capitalize text-black-1 ml-1">
                    {asset.riskLevel}
                  </span>
                </p>
              </div>
            </div>
            <div className="mt-8 justify-center flex z-[400]">
              <a
                href="#"
                id="section-links"
                className="inline-flex items-center text-teal-1"
              >
                <span className="font-tomato-semibold lg:text-[16px] text-[13px] tracking-tight">
                  Learn how {asset.title} works
                </span>
                <div className="arrows">
                  <span className="ml-2">&rarr;</span>
                  <span className="ml-2">&rarr;</span>
                </div>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

import { useInView, motion } from "framer-motion";
import { useRef } from "react";

export const RegulationSection = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    margin: "-150px",
  });

  return (
    <div ref={ref}>
      <div className="regulation-bg">
        <div className="flex flex-col justify-center pt-[90px] items-center w-[40%] mx-auto">
          <div className={`overflow-hidden ${isInView && "anime-1"}`}>
            <h1 className="font-tomato-semibold translate-y-20 text-[40px] text-black-2 tracking-tighter">
              How we are Regulated
            </h1>
          </div>
          <motion.p
            initial={{
              opacity: 0,
            }}
            whileInView={{
              opacity: 1,
            }}
            viewport={{
              once: true,
              margin: "-150px",
            }}
            className="text-center font-dmsans-regular max-w-[96%] min-w-[490px] text-black-1 mt-4"
          >
            Rise is registered and regulated both in the US and in Nigeria. Our
            team is made up of US registered investment advisers, our Nigerian
            users are covered by our SEC licensed trustees, ARM Trustees and all
            our assets are held with regulated third parties, in all relevant
            jurisdictions
          </motion.p>
        </div>
      </div>
    </div>
  );
};

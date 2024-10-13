import { Testimony } from "@/utils/testimony";
import Marquee from "react-fast-marquee";
import { TestimonialCard } from "./cards/testimonial-card";
import { useRef } from "react";
import { useInView, motion } from "framer-motion";

export const Testimonials = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, {
    margin: "-150px",
    once: true
  });
  return (
    <div ref={ref} className="mt-20">
      <div className="flex flex-col justify-center items-center">
        <div className={`overflow-hidden ${isInView && "anime-1"}`}>
          <h1 className="text-teal-2 font-tomato-semibold translate-y-20 lg:w-full w-[90%] mx-auto text-center lg:leading-[61px] leading-[90%] lg:text-[40px] text-[32px] tracking-tighter">
            From The People Who Use Rise
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
          className="text-black-1 text-center lg:w-[37%] lg:max-w-[40%] md:w-[45%] md:max-w-[47%] w-[90%] lg:mt-0 mt-4 leading-[25px] mx-auto"
        >
          Our mission at Risevest is to empower more people just like you to
          achieve your personal financial goals.
        </motion.p>
      </div>
      <Marquee className="w-full mt-12" pauseOnClick pauseOnHover>
        {Testimony.map((element, index) => (
          <TestimonialCard
            key={index}
            name={element.name}
            description={element.description}
            image={element.image}
          />
        ))}
      </Marquee>
    </div>
  );
};

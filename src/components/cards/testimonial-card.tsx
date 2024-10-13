import React from "react";

type Props = {
  description: string;
  image: string;
  name: string;
};

export const TestimonialCard: React.FC<Props> = ({
  description,
  image,
  name,
}) => {
  return (
    <div
      className="w-[400px] px-4 py-6 mr-[20px] border border-teal-4 h-[248px] bg-primary-100 rounded-[10px] flex flex-col justify-between"
      style={{ boxShadow: "0 12px 24px rgba(64, 187, 195, 0.15)" }}
    >
      <p className="font-dmsans-light text-[16px] leading-[25px]">
        {description}
      </p>
      <div className="flex items-center gap-4">
        <img className="w-[32px] h-[32px] object-cover rounded-full" src={image} alt="" />
        <p className="font-tomato-semibold tracking-tighter">{name}</p>
      </div>
    </div>
  );
};

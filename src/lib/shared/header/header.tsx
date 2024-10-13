import { useState } from "react";
import Logo from "@assets/images/svg/logo.svg";
import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import Menu from "@assets/images/svg/menu.svg";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="hidden lg:flex w-full h-[91px] bg-primary-100 px-[130px] py-[25px] justify-between items-center">
        <div className="w-[60px] h-[17.69px]">
          <img
            src={Logo}
            alt="Logo"
            className="w-full h-full object-center object-contain"
          />
        </div>
        <div className="flex items-center gap-6">
          {[
            "Home",
            "Products",
            "Investment Club",
            "Blog",
            "About Us",
            "FAQs",
          ].map((elem, index) => (
            <div
              key={index}
              onClick={() =>
                navigate(
                  `${location.pathname}#${elem
                    .split(" ")
                    .join("")
                    .toLowerCase()}`
                )
              }
              className="cursor-pointer w-fit relative justify-center flex flex-col items-center"
            >
              <div>
                <p
                  className={`text-teal-1 text-center origin-center transition ease-in-out text-[16px] ${
                    location.hash.includes(
                      elem.split(" ").join("").toLowerCase()
                    )
                      ? "font-tomato-semibold"
                      : "font-tomato-light"
                  }`}
                >
                  {elem} {index === 1 && <span className="font-dmsans-light">&darr;</span>}
                </p>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: location.hash.includes(
                    elem.split(" ").join("").toLowerCase()
                  )
                    ? 1
                    : 0,
                }}
                className="w-[8px] h-[8px] bg-teal-1 rounded-full mt-1"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="lg:hidden flex fixed z-[600] items-center justify-between w-full bg-primary-100 p-6">
        <div className="w-[60px] h-[17.69px]">
          <img
            src={Logo}
            alt="Logo"
            className="w-full h-full object-center object-contain"
          />
        </div>
        <div onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <img src={Menu} alt="" />
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full bg-primary-100 shadow-sm z-[200] transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-[250px] px-4 py-8 lg:hidden`}
      >
        <div className="w-[60px] h-[17.69px]">
          <img
            src={Logo}
            alt="Logo"
            className="w-full h-full object-center object-contain"
          />
        </div>
        <div className="flex flex-col items-start gap-6 mt-24">
          {[
            "Home",
            "Products",
            "Investment Club",
            "Blog",
            "About Us",
            "FAQs",
          ].map((elem, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(
                  `${location.pathname}#${elem
                    .split(" ")
                    .join("")
                    .toLowerCase()}`
                );
                setIsSidebarOpen(false);
              }}
              className="cursor-pointer w-full relative justify-start flex  items-center gap-2"
            >
              <div>
                <p
                  className={`text-teal-1 text-left origin-center transition ease-in-out text-[16px] ${
                    location.hash.includes(
                      elem.split(" ").join("").toLowerCase()
                    )
                      ? "font-tomato-semibold"
                      : "font-tomato-light"
                  }`}
                >
                  {elem}
                </p>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{
                  scale: location.hash.includes(
                    elem.split(" ").join("").toLowerCase()
                  )
                    ? 1
                    : 0,
                }}
                className="w-[8px] h-[8px] bg-teal-1 rounded-full"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

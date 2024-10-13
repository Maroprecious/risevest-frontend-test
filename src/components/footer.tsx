import { footerData } from "@/utils/footer-data";
import Logo from "@assets/images/svg/logo2.svg";

export const Footer = () => {
  return (
    <footer className="relative justify-between lg:px-20 px-8 pt-24 pb-10 bg-primary-100">
      <div className="absolute">
        <img src={Logo} alt="Logo" className="mb-4" />
      </div>

      <div className="lg:grid-cols-4 grid-cols-2 grid justify-between">
        {footerData.map((section, index) => (
          <div className="" key={index}>
            {section.title && (
              <h3 className="font-tomato-semibold text-black-2">
                {section.title}
              </h3>
            )}
            <ul className={section.title === "" ? "mt-12" : "mt-8"}>
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mb-4">
                  <a
                    href={link.url}
                    className="text-black-2 font-dmsans-light"
                    target={link.name ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                  >
                    {link.name}{" "}
                    <span className="ml-3 text-[16px]">
                      {" "}
                      {link.showArrow && "↗"}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </footer>
  );
};

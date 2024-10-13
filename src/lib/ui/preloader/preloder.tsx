import PreloaderSvg from "@assets/images/svg/preloader.svg";

export default function Preloader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <img className="w-[150px]" src={PreloaderSvg} alt="preloader" />
    </div>
  );
}

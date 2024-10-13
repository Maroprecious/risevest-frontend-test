import { FC } from "react";
import { LayoutProps } from "../types/global";
import { Header } from "../shared";

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full bg-primary-100">
      <div className="w-full px-sm">
        <div className="mx-auto w-full max-w-wide">
          <div className="w-full h-full">
            <Header />
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

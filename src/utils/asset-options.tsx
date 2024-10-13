import StockImg from "../assets/images/svg/stocks.svg";
import RealEstateImg from "../assets/images/svg/real-estate.svg";
import fixedIncomeImg from "../assets/images/svg/fixed-income.svg";

export const AssetOptions = [
  {
    title: "Stocks",
    description: (
      <p className="text-center lg:text-[15px] text-[13px] text-black-1 lg:max-w-[278px] max-w-[240px] font-dmsans-light tracking-tight">
        We help you invest and manage your money by investing in our portfolio
        of 30 high-growth stocks across the US market with our equity portfolio
        of power stocks.
      </p>
    ),
    returns: "14%",
    riskLevel: "medium",
    image: StockImg,
  },
  {
    title: "Real Estate",
    description: (
      <p className="text-center leading-[24px] lg:text-[15px] text-[13px] lg:max-w-[258px] max-w-[228px] text-black-1 font-dmsans-light tracking-tight">
        Our Real Estate plan is the sweet middle. Best for those who want a
        balance of good returns and medium risk. This plan invests in rented
        buildings in the US.
      </p>
    ),
    returns: "14%",
    riskLevel: "medium",
    image: RealEstateImg,
  },
  {
    title: "Fixed Income",
    description: (
      <p className="text-center leading-[24px] px-2 lg:min-w-[287px] lg:max-w-[370px] min-w-[260px] lg:text-[15px] text-[13px] whitespace-pre-line text-black-1 font-dmsans-light tracking-tight">
        A low-risk asset perfect for anyone who wants to protect their money in
        a secure, appreciating currency, i.e. the dollar. For people who want to
        protect their hard-earned money from inflation while earning steady
        returns.
      </p>
    ),
    returns: "14%",
    riskLevel: "medium",
    image: fixedIncomeImg,
  },
];

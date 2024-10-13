import Invest from "../assets/images/svg/invest.svg";
import ChoosePlan from "../assets/images/svg/choose-plan.svg";
import Reminder from "../assets/images/svg/reminder.svg";
import setGoals from "../assets/images/svg/set-goals.svg";
export const Goals = [
  {
    title: (
      <h1 className="lg:text-[32px] md:text-[28px]  md:text-left text-[20px] text-center lg:text-left lg:leading-[39px] leading-[30px] max-w-xl font-tomato-semibold text-black-2">
        Invest your money in dollars
      </h1>
    ),
    description: (
      <p className="leading-[27px] lg:max-w-xs tracking-[.6px]  md:text-left text-[16px] font-tomato-regular min-w-xs  text-center lg:text-left text-black-1 mt-2">
        By holding your investments in a stable currency, your money grows more
        over time and retains its value better.
      </p>
    ),
    image: Invest,
  },
  {
    title: (
      <h1 className="lg:text-[32px] md:text-[28px] text-[20px] md:text-left mx-auto lg:mx-0 md:mx-0 text-center lg:text-left lg:leading-[39px] leading-[30px] max-w-xs font-tomato-semibold text-black-2">
        Choose what's best for you
      </h1>
    ),
    description: (
      <p className="text-[16px] font-tomato-regular lg:min-w-xs   md:text-left text-center lg:text-left text-black-1 mt-2 leading-[28px]">
        Unlike other platforms, Rise lets you pick between stocks, US real
        estate and fixed income, according to your risk appetite. That way you
        can spread your risk and tap into different investments all in one
        place.
      </p>
    ),
    image: ChoosePlan,
  },
  {
    title: (
      <h1 className="lg:text-[32px] md:text-[28px] text-[20px]  md:text-left text-center lg:text-left lg:leading-[39px] leading-[30px]max-w-lg font-tomato-semibold text-black-2">
        Set goals and reach them
      </h1>
    ),
    description: (
      <p className="text-[16px] font-tomato-regular  text-center  md:text-left lg:text-left lg:min-w-[408px] text-black-1 mt-2 leading-[28px]">
        You can invest towards a goal on Rise--retirement, higher education,
        save for your home or travel budgets. Or create a goal of your own and
        invest periodically to achieve them.
      </p>
    ),
    image: setGoals,
  },
  {
    title: (
      <h1 className="lg:text-[32px] md:text-[28px] text-[20px]  md:text-left lg:leading-[39px] text-center lg:text-left leading-[30px] lg:max-w-md tracking-tight font-tomato-semibold text-black-2">
        We remember so you dont have to
      </h1>
    ),
    description: (
      <p className="text-[16px] font-tomato-regular lg:min-w-md  md:text-left text-center lg:text-left whitespace-pre-line text-black-1 mt-2 leading-[28px]">
        Our Auto-invest feature makes it easy to stay consistent, even when you
        forget. Set a funding amount, frequency and payment method and Rise will
        automatically fund your investment, on schedule.
      </p>
    ),
    image: Reminder,
  },
];

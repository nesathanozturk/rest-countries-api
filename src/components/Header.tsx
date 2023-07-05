import { HiOutlineMoon } from "react-icons/hi";

const Header = () => {
  return (
    <header className="flex justify-between items-center shadow py-5 px-5 md:px-20 text-lm-text">
      <h1 className="text-base md:text-xl font-bold">Where in the world?</h1>
      <div className="flex items-center gap-1">
        <HiOutlineMoon size={16} />
        <span className="text-xs md:text-sm font-semibold">Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;

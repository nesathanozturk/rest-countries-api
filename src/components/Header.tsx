import { HiOutlineMoon } from "react-icons/hi";

const Header = () => {
  return (
    <header className="flex justify-between items-center shadow-md">
      <h1>Where in the world?</h1>
      <div className="flex items-center gap-2">
        <HiOutlineMoon size={16} />
        <span>Dark Mode</span>
      </div>
    </header>
  );
};

export default Header;

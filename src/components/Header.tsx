import DarkButton from "./ui/DarkButton";

const Header = () => {
  return (
    <header className="bg-lmel dark:bg-dmel flex justify-between items-center shadow-md py-5 px-5 md:px-20 text-lmtxt dark:text-dmtext">
      <h1 className="text-base md:text-xl font-bold">Where in the world?</h1>
      <DarkButton />
    </header>
  );
};

export default Header;

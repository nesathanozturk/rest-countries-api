import { MdOutlineSearch } from "react-icons/md";

const Input = () => {
  return (
    <div className="relative text-lm-input">
      <MdOutlineSearch size={18} className="absolute top-4 left-6" />
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full sm:w-96 py-4 pl-14 rounded-md shadow-md text-xs font-medium"
      />
    </div>
  );
};

export default Input;

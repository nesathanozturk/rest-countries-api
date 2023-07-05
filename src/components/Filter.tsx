import Select from "./Select";
import Input from "./Input";

const Filter = () => {
  return (
    <div className="flex justify-between px-5 md:px-20">
      <Input />
      <Select />
    </div>
  );
};

export default Filter;

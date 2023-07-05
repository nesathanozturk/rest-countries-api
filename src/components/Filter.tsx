import Select from "./ui/Select";
import Input from "./ui/Input";

const Filter = () => {
  return (
    <div className="flex gap-10 sm:gap-0 flex-col sm:flex-row justify-between mt-12">
      <Input />
      <Select />
    </div>
  );
};

export default Filter;

import Select from "./ui/Select";
import Input from "./ui/Input";

const Filter = () => {
  return (
    <section className="flex gap-10 sm:gap-0 flex-col sm:flex-row justify-between">
      <Input />
      <Select />
    </section>
  );
};

export default Filter;

import { useState } from "react";
import Select from "react-select";
import style from "./DropDown.module.css";

const options = [
  { value: "plum", label: "Plum" },
  { value: "peach", label: "Peach" },
  { value: "cherry", label: "Cherry" },
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "pear", label: "Pear" },
  { value: "grape", label: "Grape" },
];

export default function DropDown() {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  return (
    <div className={style.dropdown}>
      <Select
        className={style.select}
        value={selectedOption}
        onChange={handleChange}
        options={options}
        isSearchable={true}
      />
    </div>
  );
}

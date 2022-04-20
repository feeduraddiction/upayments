import { getCategories } from "src/utils/http";
import {
  CategoryPropTypes,
  SelectPropTypes,
} from "@assets/types/componentsTypes";
import { useEffect, useState } from "react";

const Select = ({ onChangeCategory }: SelectPropTypes) => {
  const [data, setData] = useState<CategoryPropTypes[]>([]);

  useEffect(() => {
    const setCategories = async () => {
      const categories = await getCategories();
      setData(categories);
    };
    setCategories();
  }, []);

  return (
    <div>
      <select
        required
        defaultValue=""
        placeholder="Categories"
        name="category"
        className="block text-gray-700 text-base font-normal h-10 w-64 px-5 rounded-lg shadow-md my-5"
        onChange={onChangeCategory}
      >
        <option value="">Categories</option>
        {data.map((category) => (
          <option key={category.id} value={category.name}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;

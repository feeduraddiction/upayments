import { getCategories } from "@assets/functions";
import { categoryPropTypes } from "@assets/types";
import { useEffect, useState } from "react";

const Select = ({
  onChangeCategory,
}: {
  onChangeCategory: (e: React.FormEvent<HTMLSelectElement>) => void;
}) => {
  const [data, setData] = useState<categoryPropTypes[]>([]);

  useEffect(() => {
    getCategories().then((categories) => setData(categories));
  }, []);

  return (
    <div className="">
      <select
        required
        defaultValue=""
        placeholder="Categories"
        name="category"
        id=""
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

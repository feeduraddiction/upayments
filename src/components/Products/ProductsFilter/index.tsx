import Select from "@components/UI/Select";
import {
  categoryInputAction,
  searchInputAction,
} from "@store/slices/filterSlice";
import { useDispatch } from "react-redux";

const ProductsFilter = () => {
  const dispatch = useDispatch();
  const changeCategoryHandler = (e: React.FormEvent<HTMLSelectElement>) => {
    dispatch(categoryInputAction(e.currentTarget.value));
  };

  const changeSearchHandler = (e: React.FormEvent<HTMLInputElement>) => {
    dispatch(searchInputAction(e.currentTarget.value));
  };

  return (
    <div className="flex justify-between items-center max-w-7xl mx-auto h-36">
      <input
        className="block text-gray-700 text-base font-normal h-10 w-64 px-5 rounded-lg shadow-md"
        placeholder="Search for products..."
        type="text"
        onChange={changeSearchHandler}
      />
      <Select onChangeCategory={changeCategoryHandler} />
    </div>
  );
};

export default ProductsFilter;

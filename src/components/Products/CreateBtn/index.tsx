import { Link } from "react-router-dom";

const CreateBtn = () => {
  return (
    <Link to="/create">
    <div className=" w-16 h-16 bg-slate-800 rounded-full align-center fixed bottom-24 right-24">
      <p className="text-white text-xxl font-bold text-center leading-none absolute top-0.5 left-3.5">
        +
      </p>
    </div>
    </Link>
  );
};

export default CreateBtn;

import { useNavigate } from "react-router-dom";
export default function TopNav() {
  let navigate = useNavigate();
  return (
    <div className="w-full py-3 md:py-5 px-4 md:px-14 flex justify-between items-center shadow-lg rounded-b-lg bg-[#E1BEE7]">
      <div className="font-Merriweather font-bold">
        <a href="/">DEVOUTdev</a>
      </div>
      <div className="flex gap-3">
        <div>
          <button
            onClick={() => navigate("/sign-up")}
            className="bg-white capitalize rounded-md border-2 border-solid border-orange-700  px-3 py-2 text-black"
          >
            Get started
          </button>
        </div>
        <div>
          <button
            onClick={() => navigate("/login")}
            className="bg-transparent rounded-md border-2 border-solid border-orange-700  px-4 py-2 text-black"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

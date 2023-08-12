import { useNavigate } from "react-router-dom";
export default function LandingContent() {
    let navigate = useNavigate()
  return (
    <div className="flex w-full flex-col md:flex-row px-10">
      <div className="md:w-1/2 w-full mt-10 md:mt-32">
        <div>
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1691793690/gst-quiz/uniben-logo1__2_-removebg-preview_bne2jt.png"
            className="w-[3.5rem]"
            alt=""
          />
        </div>
        <div>
          <div className="font-inter font-semibold md:text-lg py-2">
            Master GST with Flexible, Self-Paced Tests!
          </div>
          <h1 className="font-merriweather text-center md:text-left text-2xl md:text-4xl md:leading-[3rem] font-bold pr-9">
            Welcome to the future of <br className="hidden md:flex"/>
            <span className="text-[#7b1FA2]">GST learning!</span> 
            </h1>
          <div className="mt-[1.5rem] flex justify-center items-center md:justify-start items-start gap-5">
            <button
              onClick={() => navigate("/sign-up")}
              className="bg-[#7b1FA2] skewed py-3 capitalize font-roboto px-6 text-white rounded "
            >
              get started
            </button>
            <button
              onClick={() => navigate("/sign-up")}
              className="bg-white skewd py-3 capitalize font-roboto px-6 text-black border-2 border-solid border-orange-700 rounded "
            >
              get token
            </button>
          </div>
        </div>
      </div>
      <div className="md:w-1/2 w-full flex justify-center items-center md:h-[80vh]">
        <img
          src="https://res.cloudinary.com/phantom1245/image/upload/v1691793689/gst-quiz/undraw_Reading_time_re_phf7-removebg-preview_m5pefq.png"
          alt=""
          className="w-full shadow-lg rounded"
        />
      </div>
    </div>
  );
}

import { useNavigate } from "react-router-dom";
export default function LandingContent() {
    let navigate = useNavigate()
  return (
    <div className="flex w-full  px-10">
      <div className="w-1/2 mt-32">
        <div>
          <img
            src="https://res.cloudinary.com/phantom1245/image/upload/v1691793690/gst-quiz/uniben-logo1__2_-removebg-preview_bne2jt.png"
            className="w-[3.5rem]"
            alt=""
          />
        </div>
        <div>
          <div className="font-inter font-semibold text-lg py-2">
            Master GST with Flexible, Self-Paced Tests!
          </div>
          <h1 className="font-merriweather text-3xl font-bold pr-9">
            Welcome to the future of{" "}
            <span className="text-[#7b1FA2]">GST learning!</span> <br /> Empower
            yourself with flexible GST tests on our revolutionary platform.
          </h1>
          <div className="mt-[1.5rem]">
            <button
              onClick={() => navigate("/sign-up")}
              className="bg-[#7b1FA2]  py-3 capitalize font-roboto px-6 text-white rounded "
            >
              get started
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-center items-center h-[80vh]">
        <img
          src="https://res.cloudinary.com/phantom1245/image/upload/v1691793689/gst-quiz/undraw_Reading_time_re_phf7-removebg-preview_m5pefq.png"
          alt=""
          className="w-full shadow-lg rounded"
        />
      </div>
    </div>
  );
}

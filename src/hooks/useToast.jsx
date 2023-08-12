import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom hook to display error toast
function useToast() {
  const showToast = (message) => {
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return showToast;
}

export default useToast;

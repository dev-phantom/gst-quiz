import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function App() {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* renders all children i.e all other routes */}
      <Outlet />
      <ToastContainer />
    </>
  );
}

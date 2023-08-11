import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import App from "./App";

import Landing from "./pages/landing";
import SignUp from "./pages/signUp";
import Login from "./pages/login";


// creates routes and returns router object for app

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Landing />} />
      {/* user routes */}
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Route>
  )
);
export default router;

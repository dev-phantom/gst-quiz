import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "../hooks/useToast";
import Input from "../components/atoms/Input";
import AuthLayout from "../layout/authLayout";
import { Post } from "../utils/request";

export default function Login() {
  const navigate = useNavigate();
  const showToast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data);
  };

  const validateForm = () => {
    const { email, password } = data;
    const isValid =
      email !== "" &&
      password !== ""

    if (!isValid) {
      showToast("Invalid credentials");
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    Post("/login", data, (response, error) => {
      setIsLoading(false);
      if (response) {
        console.log("Response:", response);
        // localStorage.setItem("userId", response.visitor._id);
      } else {
        console.error("Error:", error.error);
      }
    });
  };

  return (
    <AuthLayout
      quesion={"Don't have an account?"}
      questionLinkText={"Sign Up"}
      questionLink={"/sign-up"}
      handleSubmit={handleSubmit}
      buttonContent={isLoading ? "Please wait..." : "Login"}
      disabled={isLoading}
      subHeading={"Continue from where you stopped"}
    >
      <form className="md:px-14 px-8" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email address"
          label="Email"
          name="email"
          onChange={handleChange}
        />

        <Input
          type="password"
          placeholder="Password"
          label="Password"
          name="password"
          onChange={handleChange}
        />

      </form>
    </AuthLayout>
  );
}

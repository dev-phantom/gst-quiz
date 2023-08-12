import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useToast from "../hooks/useToast";
import Input from "../components/atoms/Input";
import AuthLayout from "../layout/authLayout";
import { Post } from "../utils/request";

export default function SignUp() {
  const navigate = useNavigate();
  const showToast = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    department: "",
    accessCode: "",
    email: "",
    phone: 0,
    password: "",
  });

  useEffect(() => {
    console.log(data)
  }, [data]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(data)
  };

  const validateForm = () => {
    const { email, password, firstName, lastName, phone, accessCode } = data;
    const isValid =
      email !== "" &&
      password !== "" &&
      firstName !== "" &&
      lastName !== "" &&
      phone !== "" &&
      accessCode !== "";

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
    Post("/signup", data, (response, error) => {
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
      quesion={"Already have an account?"}
      questionLinkText={"Sign In"}
      questionLink={"/login"}
      handleSubmit={handleSubmit}
      buttonContent={isLoading ? "Please wait..." : "Get Started"}
      disabled={isLoading}
    >
      <form className="md:px-14 px-3" onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="Email address"
          label="Email"
          name="email"
          onChange={handleChange}
        />

        <Input
          type="text"
          placeholder="First Name"
          label="First Name"
          name="firstName"
          onChange={handleChange}
        />

        <Input
          type="text"
          placeholder="Last Name"
          label="Last Name"
          name="lastName"
          onChange={handleChange}
        />

        <Input
          type="tel"
          placeholder="Phone Number"
          label="Phone"
          name="phone"
          onChange={handleChange}
        />

        <Input
          type="text"
          placeholder="Department"
          label="Department"
          name="department"
          onChange={handleChange}
        />

        <Input
          type="password"
          placeholder="Password"
          label="Password"
          name="password"
          onChange={handleChange}
        />

        <Input
          type="text"
          placeholder="Access Token"
          label="Access Token"
          name="accessCode"
          onChange={handleChange}
        />
      </form>
    </AuthLayout>
  );
}

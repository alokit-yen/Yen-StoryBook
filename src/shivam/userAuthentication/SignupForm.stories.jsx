import React from "react";
import SignupForm from "./SignupForm";

export default {
  title: "shivam/userAuthentication/SignupForm",
  component: SignupForm,
  tags: ['autodocs'],

};

export const Default = () => {
  const handleSubmit = (formData) => {
    alert(`Name: ${formData.name}\nEmail: ${formData.email}\nPassword: ${formData.password}`);
  };

  return <SignupForm onSubmit={handleSubmit} />;
};

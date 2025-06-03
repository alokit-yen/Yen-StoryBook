import React from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";

export default {
  title: "shivam/userAuthentication/ForgotPasswordForm",
  component: ForgotPasswordForm,
    tags: ['autodocs'],

};

export const Default = () => {
  const handleSubmit = (email) => {
    alert(`Reset link sent to: ${email}`);
  };

  return <ForgotPasswordForm onSubmit={handleSubmit} />;
};

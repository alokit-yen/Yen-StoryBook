import React from "react";
import SigninForm from "./SigninForm";

export default {
  title: "shivam/userAuthentication/SigninForm",
  component: SigninForm,
  tags: ['autodocs'],

};

export const Default = () => (
  <SigninForm onSubmit={(data) => alert(`Username: ${data.username}, Password: ${data.password}`)} />
);

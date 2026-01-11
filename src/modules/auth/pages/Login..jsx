import React from "react";
import LoginHero from "../components/LoginHero";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Hero */}
      <div className="hidden lg:flex lg:w-1/2">
        <LoginHero />
      </div>

      {/* Right Side - Login Form */}
      <div className="flex-1 lg:w-1/2 flex items-center justify-center bg-gray-50 p-6">
        <LoginForm />
      </div>
    </div>
  );
}

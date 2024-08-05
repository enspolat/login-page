"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [email, setEmail] = useState<string>("");
  const router = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // Burada şifre sıfırlama işlemini yapmanız gerekiyor.
    // Genellikle bu işlem bir backend API'sine bir istek göndererek yapılır.
    // Örnek olarak sadece bir toast mesajı göstereceğiz.

    toast.info("Password reset link sent to your email", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="absolute top-4 left-4 bg-blue-500 text-white px-4 py-2 rounded">
        <button onClick={handleBackToHome}>Back to Home</button>
      </div>

      <div className="w-full max-w-md bg-gray-800 rounded-lg p-6">
        <h1 className="text-2xl font-bold mb-4">Forgot Password</h1>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col gap-2 mb-4">
            <label htmlFor="email" className="text-xs">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Type your email"
              className="text-xs bg-neutral-800 rounded-lg py-2 px-4 outline-none focus:outline-neutral-600"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors mb-4"
          >
            Send Reset Link
          </button>
        </form>

        <ToastContainer />
      </div>
    </div>
  );
};

export default ForgotPassword;

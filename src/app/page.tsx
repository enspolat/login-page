"use client";

import { useState, FormEvent } from "react";
import Image from "next/image";
import BG from "/public/login.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface User {
  email: string;
  password: string;
}

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const res = await fetch("/users.json");
    const users: User[] = await res.json();

    const userExists = users.some(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      setIsSuccess(true);
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else {
      setIsSuccess(false);
      toast.error("Invalid email or password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <main className=" min-h-screen grid grid-cols-2">
      <div className="flex items-center justify-center overflow-hidden relative">
        <Image src={BG} alt="BG" priority className="absolute max-w-screen" />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 p-24">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/logo.svg"
          alt="Next.js Logo"
          width={48}
          height={33}
          priority
        />
        <h1 className="text-2xl tracking-tight">Welcome</h1>
        <p>
          Use your <b>work email</b> for a better experience
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5 py-5 w-[350px]"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-xs">
              E-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="type your work email"
              className="text-xs bg-neutral-800 rounded-lg py-2 px-4 outline-none focus:outline-neutral-600"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-xs">
              password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="type your password"
              className="text-xs  bg-neutral-800 rounded-lg py-2 px-4 outline-none focus:outline-neutral-600"
            />
          </div>
          <button
            type="submit"
            className="text-xs text-white font-semibold rounded py-2 px-4 bg-[#06A087] hover:bg-white hover:text-[#06A087]"
          >
            continue with email
          </button>
          <a href="#" className="text-center text-xs underline">
            forgot password
          </a>
        </form>
        <div className="text-lg">
          <ToastContainer />
        </div>
      </div>
    </main>
  );
};
export default Login;

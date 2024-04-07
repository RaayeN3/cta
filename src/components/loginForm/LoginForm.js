"use client";

import { handleGoogleLogin, handleLogin } from "@/lib/action";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import Link from "next/link";

const LoginForm = () => {
  const inputs = [
    { type: "text", placeholder: "Username", name: "username" },
    { type: "password", placeholder: "Password", name: "password" },
  ];
  const [state, formAction] = useFormState(handleLogin, undefined);
  const route = useRouter();
  //   useEffect(()=>{
  //     state?.user
  //   })
  return (
    <div className="  m-auto lg:w-2/4 max-lg:w-4/5 max-sm:w-full bg-slate-800 flex flex-col gap-9 p-8 rounded-2xl">
      <h1 className="text-center text-2xl font-bold">Login to your account</h1>
      <form action={formAction} className="flex flex-col text-center gap-8">
        {inputs.map((input) => (
          <input
            type={input.type}
            placeholder={input.placeholder}
            name={input.name}
            key={input.name}
            className=" p-3 bg-gray-200 text-bg rounded-xl outline-none"
          />
        ))}
        {state?.error && <p className=" text-red-700">{state.error}</p>}
        <button className="p-3 cursor-pointer bg-btn text-white font-bold border-none rounded-2xl">
          Login
        </button>
        <Link href={"/register"}>
          Don't have account? register <b>here</b>
        </Link>
      </form>
      <hr className=" border-gray-500 w-4/5 m-auto" />
      <form action={handleGoogleLogin} className="flex flex-col items-center">
        <button className="bg-white text-black p-3 rounded-2xl justify-center flex items-center gap-2 font-semibold">
          Login with Google <Image src={"/google.png"} width={20} height={20} />
        </button>
      </form>
    </div>
  );
};

export default LoginForm;

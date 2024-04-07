"use client";
import { useFormState } from "react-dom";
import { handleRegister } from "@/lib/action";
import Image from "next/image";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const inputs = [
    { type: "text", placeholder: "Username", name: "username" },
    { type: "email", placeholder: "Email", name: "email" },
    { type: "password", placeholder: "Password", name: "password" },
    { type: "password", placeholder: "Password again", name: "passwordRepeat" },
  ];
  const [state, formAction] = useFormState(handleRegister, undefined);
  const router = useRouter();
  useEffect(() => {
    state?.success && router.push("/login");
  }, [state?.success, router]);
  return (
    <div className="  m-auto lg:w-2/4 max-lg:w-4/5 max-sm:w-full bg-slate-800 flex flex-col gap-10 p-8 rounded-2xl">
      <h1 className="text-center text-2xl font-bold">Create your acount</h1>
      <form action={formAction} className=" flex flex-col text-center gap-8">
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
          Register
        </button>

        <Link href={"/login"}>
          Have an account? login <b>here</b>
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;

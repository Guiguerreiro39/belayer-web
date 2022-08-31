import { FormEvent, useState } from "react";
import type { NextPage } from "next";
import { useAuthStore } from "@/services/store/auth";
import { useRouter } from "next/router";
import { withoutAuth } from "@/HOCs/auth";

const Login: NextPage = () => {
  const store = useAuthStore();
  const router = useRouter();

  // React state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    const res = await store.login(email, password);
    if (res) router.push("/");
  };

  return (
    <>
      <form onSubmit={submit} className="h-full w-1/2 m-auto flex flex-col items-center justify-center space-y-5">
        <input
          placeholder="Your email address"
          type="email"
          name="email"
          autoComplete="email"
          className="input w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Your account password"
          type="password"
          name="password"
          autoComplete="password"
          className="input w-full"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="btn-lg">
          Login
        </button>
      </form>
    </>
  );
};

export default withoutAuth(Login);

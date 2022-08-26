import { FormEvent, useState, useContext } from "react";
import { AuthContext } from "@/context/auth";
import type { NextPage } from "next";
import { useAuthStore } from "@/services/store/auth";

const Home: NextPage = () => {
  // Store
  const store = useAuthStore();

  // Context
  const { isAuthenticated } = useContext(AuthContext)

  // React state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (store.user) {
      store.logout()
    }
    else store.login(email, password);
  };

  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          className="border w-40 h-10"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="border w-40 h-10"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="bg-red-500">
          {store.user ? 'Logout' : 'Login'}
        </button>
      </form>
      {isAuthenticated && <p>Hello {store.user?.firstName}</p>}
    </>
  );
};

export default Home;

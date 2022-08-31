import type { NextPage } from "next";
import { withAuth } from "@/HOCs/auth";
import { useAuthStore } from "@/services/store/auth";
import { useRouter } from 'next/router';
import Navbar from "@/components/layout/navbar";

const Home: NextPage = () => {
  const store = useAuthStore();
  const router = useRouter()

  const logout = async () => {
    const res = await store.logout()

    if (res) router.push("/login")
  }

  return (
    <>
      <Navbar />
      <button onClick={logout} className="btn-lg">
        Logout
      </button>
    </>
  );
};

export default withAuth(Home);

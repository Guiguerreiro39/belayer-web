import type { NextPage } from "next";
import withAuth from "@/HOCs/auth";

const Home: NextPage = () => {
  return (
    <>
      Hello all!
    </>
  );
};

export default withAuth(Home);

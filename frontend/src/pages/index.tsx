import { FormEvent, useEffect, useState } from "react";
import type { NextPage } from "next";
import { gql, useMutation } from "@apollo/client";
import { useStore } from "@/utils/store";

const LOGIN = gql`
  mutation login($input: LoginInput!) {
    login(loginInput: $input) {
      email
      firstName
      level
    }
  }
`;

const Home: NextPage = () => {
  // Store
  const store = useStore();

  // Graphql
  const [loginMutation, { data }] = useMutation(LOGIN);

  // React state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Save token and user on store when login is made
  useEffect(() => {
    if (data) store.login(data.login);
  }, [data]);

  const login = () => {
    loginMutation({
      variables: {
        input: {
          email,
          password,
        },
      },
      errorPolicy: 'all'
    });
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    login();
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
          Login
        </button>
      </form>
      <p>{process.env.GRAPHQL_SERVER_URL}</p>
      {store.user && <p>Hello {store.user.firstName}</p>}
    </>
  );
};

export default Home;

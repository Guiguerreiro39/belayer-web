import { createContext, useEffect } from "react";
import { useAuthStore } from "@/services/store/auth";

type AuthContextType = {
  isAuthenticated: boolean;
};

type AuthContextPropsType = {
  children: JSX.Element
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthContextPropsType) {
  const store = useAuthStore((state) => ({user: state.user, authInit: state.authInit}));

  useEffect(() => {
    store.authInit();
  }, []);

  const isAuthenticated = !!store.user;

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

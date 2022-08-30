import { createContext, useContext } from "react";
import { useAuthStore } from "@/services/store/auth";

type AuthContextType = {
  isAuthenticated: boolean;
};

type AuthContextPropsType = {
  children: JSX.Element;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthContextPropsType) {
  const store = useAuthStore((state) => ({ user: state.user, authInit: state.authInit }));

  // Check if the user is authenticated
  const isAuthenticated = !!store.user

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export function useIsAuthenticated() {
  const context = useAuth();
  return context.isAuthenticated;
}

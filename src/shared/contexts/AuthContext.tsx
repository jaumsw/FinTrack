import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import axios from "axios";

interface AuthenticateInterface {
  email: string;
  password: string;
}

interface User {
  name: string;
  email: string;
  password: string;
  role: string;
}

interface AuthContextProps {
  user: User | null;
  isAuthenticated: boolean;
  authenticateUser: ({
    email,
    password,
  }: AuthenticateInterface) => Promise<{ success: boolean; message: string }>;
  signOutUser: () => void;
}

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const isAuthenticated = !!user;

  const authenticateUser = async ({ email, password }: AuthenticateInterface) => {
    const response = await axios.post("/api/auth", { email: email, password: password });

    if (response.status === 200) {
      const token = response.data.token;
      const user = response.data.user;

      setCookie(null, "token", token, {
        maxAge: 60 * 60 * 24,
      });

      setUser(user);
      return { success: true, message: "Usuário autenticado com sucesso!" };
    } else {
      return { success: false, message: "Falha na autenticação" };
    }
  };

  const signOutUser = () => {
    setUser(null);
    destroyCookie(null, "token");
    window.location.reload();
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, authenticateUser, signOutUser }}>{children}</AuthContext.Provider>
  )
}

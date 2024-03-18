import { createContext, ReactNode, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from "nookies";
import axios from "axios";

interface AuthenticateInterface {
    email: string;
    password: string;
}

interface User{
    username: string;
    email: string;
    fullName: string;
    isAdmin: boolean;
}

interface AuthContextProps{
    signOutUser: () => void;
    user : User | null;
    isAuthenticated: boolean;
    isAdmin: boolean;
    authenticateUser: ({email, password}: AuthenticateInterface) => Promise<{ success: boolean, message: string }>;
}

export const AuthContext = createContext({} as AuthContextProps)

export const delay = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

export function AuthProvider({children}: {children: ReactNode}){
    const [user, setUser] = useState<User | null>(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const isAuthenticated = !!user;

}
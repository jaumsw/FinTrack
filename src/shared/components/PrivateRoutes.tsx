import { useLocation, Outlet, Navigate } from "react-router-dom";
import { parseCookies } from "nookies";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
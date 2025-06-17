import React from "react";
import { Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();
  useEffect(() => {
    const authCheck = async () => {
      try {
        const tokens = localStorage.getItem("tokens");
        const parsedUser = JSON.parse(localStorage.getItem("users"));
        if (tokens && parsedUser) {
          console.log(`from Context ${parsedUser}`);
          setAuth({
            user: parsedUser,
            token: tokens,
          });
        }
        console.log(`from protected Router ${auth}`);
        console.log(`from protected Router with token ${auth.token}`);

        const { data } = await axios.get(
          `${import.meta.env.VITE_BASEURL_API}auth/auth-check`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );

        console.log("from protected Route", data);

        if (data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Auth check failed", error);
        setOk(false);
      }
    };
    authCheck();
  }, [auth?.token]);
  //
  return ok ? <Outlet /> : <Loading />;
}

import React from "react";
import AuthLayout from "../components/Layout/AuthLayout";
import UserLayout from "../components/Layout/UserLayout";
import useAuth from "../hooks/useAuth";

const MainScreen = () => {
  const { session } = useAuth();

  return session?.accessToken ? <UserLayout /> : <AuthLayout />;
};

export default MainScreen;

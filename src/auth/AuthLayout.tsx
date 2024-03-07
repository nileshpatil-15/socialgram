import React from "react";
import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
const AuthLayout = () => {
  const isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
        <section className="flex flex-1 justify-center items-center  ">
            <Outlet />
            </section>
          
            <img
              className="hidden xl:block w-1/2 bg-no-repeat h-screen object-cover"
              src="/assets/images/side-img.svg"
              alt="socialgam"
            />
         
        </>
      )}
    </>
  );
};

export default AuthLayout;

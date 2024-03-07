import { Routes, Route } from "react-router-dom";
import "./App.css";
import SignInform from "./auth/forms/SignInform";
import SignUpform from "./auth/forms/SignUpform";
import { Home } from "./root/pages";
import AuthLayout from "./auth/AuthLayout";
import RootLayout from "./root/RootLayout";
function App() {
  return(
    <main className=" flex h-screen">
    <Routes>
      {/* public in routes  */}
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInform />} />
        <Route path="/sign-up" element={<SignUpform />} />
      </Route>
      {/* private routes */}

      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </main>
  )
 
}

export default App;

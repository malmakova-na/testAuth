import "./App.css";
import AuthForm from "./components/AuthForm/AuthForm";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, Board } from "./components";
import { useSelector } from "react-redux";
import type { RootState } from "./store";
function App() {
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={isAuth ? <Navigate to="/dashboard" /> : <Home />}
        />
        <Route
          path="/login/*"
          element={isAuth ? <Navigate to="/dashboard" /> : <AuthForm />}
        />
        <Route
          path="/dashboard/*"
          element={isAuth ? <Board /> : <Navigate to={"/"} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

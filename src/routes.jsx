import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import MatriculaPage from "./pages/Matricula/MatriculaPage";

const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/matricula" element={<MatriculaPage />} />
      </Routes>
    </>
  );
};

export default RoutesMain;

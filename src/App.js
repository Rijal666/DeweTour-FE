/** @format */
import Detail from "./pages/DetailTour";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import IncomeTrip from "./pages/IncomeTrip";
import AddTrip from "./pages/AddTrip";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/AddTrip" element={<AddTrip />} />
        <Route path="/IncomeTrip" element={<IncomeTrip />} />
      </Routes>
    </>
  );
}
export default App;

import Header from "./components/Navigation/Header.jsx";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

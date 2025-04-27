import Header from "./components/Navigation/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import Chat from "./pages/Chat.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/chat" element={<Chat/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;

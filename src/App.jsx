import { ChatProvider } from "./components/ChatContext.jsx";
import Header from "./components/Navigation/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home";
import Whatsapp from "./components/Whatsapp.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";

function App() {

  return (
    <ChatProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>

        <Whatsapp />
        <Footer />
      </BrowserRouter>
    </ChatProvider>
  );
}

export default App;

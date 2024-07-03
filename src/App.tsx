import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/Navbar";
import Home from "./components/Home/Home"; // Ensure the correct path

function App() {
    return (
        <NextUIProvider>
            <Toaster richColors position="top-center" />
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </NextUIProvider>
    );
}

export default App;

import React from "react";
import { NextUIProvider } from "@nextui-org/react";
import { Toaster } from "sonner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/main";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import NavBar from "./components/Nabvar";
import Home from "./components/Home/Home";
import Contributors from "./components/Contributors/Contributors";
import AnimatedCursor from "react-animated-cursor";

function App() {
    return (
        <NextUIProvider>
            <Toaster richColors position="top-center" />
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                color="220, 90, 80"
                outerAlpha={0.2}
                innerScale={0.7}
                outerScale={2}
            />
            <Router>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/main" element={<Main />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/contributors" element={<Contributors />} />
                </Routes>
            </Router>
        </NextUIProvider>
    );
}

export default App;

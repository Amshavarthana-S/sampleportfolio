import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Toaster } from "./components/ui/toaster";
import NavigationSinglePage from "./components/NavigationSinglePage";
import SinglePageHome from "./pages/SinglePageHome";

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <BrowserRouter>
          <NavigationSinglePage />
          <Routes>
            <Route path="/" element={<SinglePageHome />} />
          </Routes>
          <Toaster />
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;

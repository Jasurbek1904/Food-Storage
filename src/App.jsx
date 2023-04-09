import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import "./style.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/MyFooter";
import { CurrentDataProvider, DataProvider } from "./components/ContextProvider/DataProvider";
import TopCities from "./components/TopCities";


function App() {

    return (
        <Router>
            <DataProvider>
                <CurrentDataProvider>
                    <MyNavbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/topCity" element={<TopCities />} />
                    </Routes>
                </CurrentDataProvider>
            </DataProvider>
            <MyFooter />
        </Router>
    )
}

export default App;
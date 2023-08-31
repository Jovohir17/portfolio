import React, {Component} from 'react';
import Eng from "./Components/Pages/eng";
import {Routes,Route} from "react-router-dom";
import Rus from "./Components/Pages/rus";

class App extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Eng/>}/>
                    <Route path="/Rus" element={<Rus/>}/>
                </Routes>
            </>
        );
    }
}

export default App;


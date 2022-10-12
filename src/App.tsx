import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./routes/routes";
import Header from "./components/header/header";

function App() {
    return (
        <BrowserRouter>
            {/*{routes.path !==  "*" ? <Header/> :''}*/}

            <Routes>
                {routes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
            </Routes>
        </BrowserRouter>
    );
}

export default App;

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import Hjem from "./pages/Hjem.jsx";
import Program from "./pages/Program.jsx";
import Detaljer from "./pages/Detaljer.jsx";
import RSVP from "./pages/RSVP.jsx";
import Gaveliste from "./pages/Gaveliste.jsx";
import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Hjem />} />
          <Route path="program" element={<Program />} />
          <Route path="detaljer" element={<Detaljer />} />
          <Route path="rsvp" element={<RSVP />} />
          <Route path="gaveliste" element={<Gaveliste />} />
        </Route>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
);

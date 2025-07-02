import { Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";
// import HomePage from "./pages/HomePage";
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
  return (
    <Suspense fallback={<div>Chargement…</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Suspense>
  );
}

export default App;

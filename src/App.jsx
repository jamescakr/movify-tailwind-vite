import React from "react";
import "./App.css";
import AppLayout from "./layout/AppLayout";
import Homepage from "./pages/Homepage";
import MoviePage from "./pages/MoviePage";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage";
import MovieModal from "./pages/MovieModal";
import "animate.css";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Homepage />} />

          <Route path="movies">
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieModal />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;

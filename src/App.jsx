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
          {/* index 속성은 부모 Route의 path를 그대로 따라가겠다는 뜻 */}
          <Route path="movies">
            {/* path가 같은경우 이렇게 Route안에 nested Route로 구성하면 좋다, 주소마다 movies를 계속 칠 필요없이 */}
            {/* 부모 Route의 path에 이미 "/"가 존재하기 때문에 /movies라고 안하고 movies라고만 해도 부모의 /가 적용됨 */}
            <Route index element={<MoviePage />} />
            <Route path=":id" element={<MovieModal />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFoundPage />} />
        {/* path에 *이 있으면 사용자 정의 경로가 아닌 다른 모든 경로에 대해 해당 컴포넌트를 렌더링함 */}
      </Routes>
    </div>
  );
};

export default App;

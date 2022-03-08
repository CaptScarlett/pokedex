import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import MainPage from "./pages/Main";
import DetailPage from "./pages/Detail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:pid" element={<DetailPage />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;

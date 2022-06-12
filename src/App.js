import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import InfoPage from "./Pages/InfoPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/info" element={<InfoPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

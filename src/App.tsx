import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ResultsPage from "./pages/Results";
import NotFound from "./pages/NotFound";

function App() {
 return (
    <BrowserRouter>
      <div id="app-layout">
        <div id="screen-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<ResultsPage />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
          
        </div>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
      
      
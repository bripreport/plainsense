import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Results from "./pages/Results";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

function App() {
 return (
    <HashRouter>
      <div id="app-layout">
        <div id="screen-container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results" element={<Results />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
          
        </div>
      </div>
      
    </HashRouter>
  );
}

export default App;
      
      
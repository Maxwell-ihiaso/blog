import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import pages, { IRoute } from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {pages.map((page: IRoute) => (
            <Route path={page.path} element={<page.element />} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

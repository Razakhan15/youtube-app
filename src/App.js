import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Recommended from "./Recommended";
import SearchPage from "./SearchPage";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="app_page">
                  <Sidebar />
                  <Recommended />
                </div>
              </>
            }
          ></Route>
          <Route
            path="/search/:searchTerm"
            element={
              <>
                <div className="app_page">
                  <Sidebar />
                  <SearchPage />
                </div>
              </>
            }
          ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

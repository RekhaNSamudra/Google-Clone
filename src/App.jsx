import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SearchResult from "./Components/SearchResults";
import { AppContext } from "./utils/ContextApi";

function App() {
  return (
    <>
            <AppContext>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/:query/:startIndex" exact element={<SearchResult />} />
        </Routes>
      </Router>
      </AppContext>
    </>
  );
}

export default App;


import "./styles.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import ViewMap from "./components/Map";

function App() {

  return (
    <Router>
      <div className="container">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/map" element={<ViewMap />} />
      </Routes>
      </div>
    </Router>
  )
}

export default App

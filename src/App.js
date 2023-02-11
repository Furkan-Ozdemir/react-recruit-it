import Homepage from "./Homepage";
import Results from "./Results";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;

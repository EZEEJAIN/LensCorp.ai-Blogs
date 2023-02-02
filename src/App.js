import Blogs from "./pages/Blogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Blogs />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

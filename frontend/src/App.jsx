import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Upload from "./pages/Upload";
import Edit from "./pages/Edit";
import Album from "./pages/Album";
import Share from "./pages/Share";

function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/edit">Edit</Link>
        <Link to="/album">Album</Link>
        <Link to="/share">Share</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="/album" element={<Album />} />
        <Route path="/share" element={<Share />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

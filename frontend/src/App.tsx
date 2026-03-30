import { Link, Route, Routes } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Riser</h1>
      <p>Home page</p>
      <Link to="/contact">Contact</Link>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <Link to="/">Home</Link>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.tsx";
import ScrollManager from "./components/ScrollManager.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import DataDriven from "./pages/DataDriven.tsx";
import Home from "./pages/Home.tsx";
import Product from "./pages/Product.tsx";

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/data-driven" element={<DataDriven />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

import { Route, Routes } from "react-router-dom";
import Home from "../App";
import Favorites from "../pages/Favorites.Page/Favorites";
import ProductPage from "../pages/Product.Page/ProductPage";

function RoutesPage() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/products" element={<ProductPage/>}/>
    </Routes>
  );
}

export default RoutesPage;

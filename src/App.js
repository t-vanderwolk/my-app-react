import { Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./page/Home";
import About from "./page/About";
// import Invoice from "./page/Invoice";
// import RouteAsObj from "./page/RouteAsObj";
import Search from "./page/Search";
import Prices from "./page/Prices";
// import UserProfile from "./page/UserProfile";
// import UserEditProfile from "./page/UserEditProfile";

import "./page/Style.css"


function App() {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/prices" element={<Prices  />} />
        {/* Approach #1 */}
  
        
        {/* Approach #2
        <Route path="invoice/*" element={<Invoice  />} />
        <Route path="object_route/*" element={<RouteAsObj  />} /> */}

        <Route path="search" element={<Search  />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export const NotFound = () => {
  return <div><h1> 404 page not found </h1> </div>
}

export default App;

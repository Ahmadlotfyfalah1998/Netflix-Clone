import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './component/Home';
import NavBar from './component/NavBar';
import FavList from './component/FavList';







function App() {
  return (
    <>
      <NavBar />





      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fav" element={< FavList />} />
      </Routes>

    </>
  );
}

export default App;



import { Route, Routes } from "react-router";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Products } from "./pages/Products/Products";



function App() {


  return (

    <>
    
      <Header />
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/products" element={<Products />}/>
      </Routes>
    </>

  )
}

export default App

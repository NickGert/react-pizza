import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import "./scss/app.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

export const SearchContext = React.createContext();

function App() {
  const [searchValue, setSearchValue] = React.useState(" ");

  return (
    <div>
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <div className="App">
          <div className="wrapper">
            <Header />
            <div className="content">
              <div className="container">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="*" element={<NotFound />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;

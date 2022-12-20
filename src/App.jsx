import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

//pages
import Explore from "./pages/explore";
import History from "./pages/history";
import SavedListings from "./pages/listings/saved";
import ActiveListings from "./pages/listings/active";
import ReportedListings from "./pages/listings/reported";
import SearchedListings from "./pages/listings/searched";

//components
import Nav from "./components/nav";
import Footer from "./components/footer";
import Settings from "./pages/settings";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/listings/active" element={<ActiveListings />} />
        <Route path="/listings/saved" element={<SavedListings />} />
        <Route path="/listings/reported" element={<ReportedListings />} />
        <Route path="/listings/searched" element={<SearchedListings />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

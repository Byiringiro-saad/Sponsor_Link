import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

//pages
import Explore from "./pages/explore";
import History from "./pages/history";
import Pricing from "./pages/settings/pricing";
import Profile from "./pages/settings/profile";
import SavedListings from "./pages/listings/saved";
import ActiveListings from "./pages/listings/active";
import Reminders from "./pages/notifications/reminders";
import ReportedListings from "./pages/listings/reported";
import SearchedListings from "./pages/listings/searched";
import Notifications from "./pages/settings/notifications";
import NotificationIndex from "./pages/notifications/index";
import Notification from "./pages/notifications/notifications";

//components
import Nav from "./components/nav";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/explore" element={<Explore />} />
        <Route path="/history" element={<History />} />
        <Route path="/notifications" element={<NotificationIndex />}>
          <Route path="" element={<Notification />} />
          <Route path="reminders" element={<Reminders />} />
        </Route>
        <Route path="/settings/profile" element={<Profile />} />
        <Route path="/settings/pricing" element={<Pricing />} />
        <Route path="/settings/notifications" element={<Notifications />} />
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

import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

//pages
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import Signup from "./pages/signup";
import History from "./pages/history";
import Explore from "./pages/explore";
import Contact from "./pages/contact";
import Steps from "./pages/signup/steps";
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
import One from "./components/signup/one";
import Two from "./components/signup/two";
import Three from "./components/signup/three";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        {/* auth */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signup/steps" element={<Steps />}>
          <Route path="profile" element={<One />} />
          <Route path="about" element={<Two />} />
          <Route path="contacts" element={<Three />} />
        </Route>

        {/* index */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* home */}
        <Route path="/explore" element={<Explore />} />
        <Route path="/history" element={<History />} />
        <Route path="/notifications" element={<NotificationIndex />}>
          <Route path="" element={<Notification />} />
          <Route path="reminders" element={<Reminders />} />
        </Route>

        {/* settings */}
        <Route path="/settings/profile" element={<Profile />} />
        <Route path="/settings/pricing" element={<Pricing />} />
        <Route path="/settings/notifications" element={<Notifications />} />

        {/* listing */}
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

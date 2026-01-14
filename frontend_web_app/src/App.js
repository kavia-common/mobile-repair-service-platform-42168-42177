import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import AppLayout from "./components/Layout/AppLayout";
import HomePage from "./pages/HomePage";
import BookServicePage from "./pages/BookServicePage";
import TrackRequestPage from "./pages/TrackRequestPage";
import DashboardPage from "./pages/DashboardPage";
import BillingPage from "./pages/BillingPage";
import NotFoundPage from "./pages/NotFoundPage";

// PUBLIC_INTERFACE
function App() {
  /** Application root: routing + shared layout for Mobile Repair Service Platform. */
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book" element={<BookServicePage />} />
          <Route path="/track" element={<TrackRequestPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/billing" element={<BillingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}

export default App;

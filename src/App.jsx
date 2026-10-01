// import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PopDesPage from "./pages/PopDesPage";
import Footer from "./components/Footer";
import DestinationBooking from "../src/pages/DestinationBooking";
import ScrollTop from "./components/ScrollTop";
import AboutUs from "./pages/AboutUs";
import ContactPopUp from "./components/ContactPopUp";
import Enquire from "./pages/Enquire";
import LocalDesPage from "./pages/LocalDesPage";
import InterDesPage from "./pages/InterDesPage";
import Gallery from "./pages/Gallery";
import GalleryDestination from "./pages/GalleryDestination";

function App() {
  // const [destinations, setDestinations] = useState("");
  return (
    <BrowserRouter>
      <ScrollTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LocalDestinationpg" element={<LocalDesPage />} />
        <Route path="/InterDestinationpg" element={<InterDesPage />} />
        <Route path="/PopularDestinationpg" element={<PopDesPage />} />
        <Route
          path="/DestinationBooking/:slug"
          element={<DestinationBooking />}
        />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/enquiry" element={<Enquire />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:slug" element={<GalleryDestination />} />
      </Routes>

      <ContactPopUp />
      <Footer />
    </BrowserRouter>
  );
}

export default App;

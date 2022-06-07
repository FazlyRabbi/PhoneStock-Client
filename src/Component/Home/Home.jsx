import React from "react";
import Navbar from "../Shared/Navbar";
import Banner from "./Banner";
import SubBanner from "./SubBanner";
import BusinessSummary from "./BusinessSummary";
import Products from "../Product/Products";
import Footer from "../Shared/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <SubBanner />
      <BusinessSummary />
      <Products />
      <Footer />
      {/* <Services />
      <Footer /> */}
    </div>
  );
}

export default Home;

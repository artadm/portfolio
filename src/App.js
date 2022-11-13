import "./styles/App.css";
import React, { Suspense } from "react";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contacts from "./components/conatcts/Contacts";
import Footer from "./components/footer/Footer";
import Stars from "./components/Stars/Stars";



const App = () => {
  return (
    <Suspense fallback={<div></div>}>
      <Header />
      <Nav />
      <About />
      <Experience/>
      <Services />
      <Portfolio/>
      <Contacts />
      <Footer />
      <Stars />
    </Suspense>
  );
};

export default App;

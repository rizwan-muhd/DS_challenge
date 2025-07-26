import HeroSection from "./HomePage";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import SearchIcon from "@mui/icons-material/Search";
import Services from "./Services";

import AboutSection from "./AboutSection";
import FAQSection from "./Faq";
import PortfolioSection from "./Portfolio";
import Footer from "./Footer";
import StatsSection from "./Status";
import Nav from "./Nav";
import Banner from "./Banner";
import ServicesSection from "./ServiceSection";
import MissionVisionSection from "./Mission";
import TodoApp from "./TodoApp";
import { Hook3s } from "./hooks";

function App() {
  return (
    <>
      {/* <Nav />
      <Banner />
      <AboutSection />
      <Services />
      <MissionVisionSection />
      <StatsSection />
      <ServicesSection />
      <FAQSection />
      <PortfolioSection />

      <Footer /> */}
      {/* <TodoApp /> */}
      <Hook3s />
    </>
  );
}

export default App;

import React from "react";
import Hero from "../Components/Hero";
import Banner from "../Components/Banner";
import Services from "../Components/Services";
import { Link } from "react-router-dom";
import FeaturedRooms from "../Components/FeaturedRooms";
import StyledButton from "../Components/StyledHero";
const Home = () => {
  return (
    <>
      <StyledButton>Hi there</StyledButton>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at £299"
        >
          <Link to="/rooms" className="btn-primary">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms />
    </>
  );
};
export default Home;

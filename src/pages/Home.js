import React from 'react';
import Header from '../components/Header';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import PopularTrips from '../components/PopularTrips';

const Home = () => {
  return (
    <>
      <Header header="header">
        <Banner
          title="Adventures Trips"
          subtitle="Thrilling trips, starting at ₹ 5,000* only"
        >
          <Link to="/trips" className="btn-primary">
            Explore Trips
          </Link>
        </Banner>
      </Header>
      <Services />
      <PopularTrips />
    </>
  );
};

export default Home;

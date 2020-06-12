import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Banner from '../components/Banner';

const Trips = () => {
  return (
    <Header header="tripsHeader">
      <Banner title="Our Trips">
        <Link className="btn-primary" to="/">
          Return Home
        </Link>
      </Banner>
    </Header>
  );
};
export default Trips;

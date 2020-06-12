import React, { Component } from 'react';
import { Trip } from './Trip';
import { TripContext } from '../Context';
import { Loading } from './Loading';
import Title from './Title';

class PopularTrips extends Component {
  static contextType = TripContext;
  render() {
    const { popularTrips, loading } = this.context;
    const popularTrip = popularTrips.map(trip => {
      return <Trip key={trip.id} trip={trip} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="Popular Trips" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : popularTrip}
        </div>
      </section>
    );
  }
}

export default PopularTrips;

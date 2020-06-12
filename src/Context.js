import React, { Component } from 'react';
import items from './data';

const TripContext = React.createContext();

class TripProvider extends Component {
  state = {
    trips: [],
    popularTrips: [],
    sortedTrips: [],
    loading: true,
  };

  formatData = items => {
    let tripData = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => {
        return image.fields.file.url;
      });
      let trip = { ...item.fields, id, images };
      return trip;
    });
    return tripData;
  };

  getTrip = slug => {
    let displayTrip = [...this.state.trips];
    const trip = displayTrip.find(trip => trip.slug === slug);
    return trip;
  };

  componentDidMount() {
    let trips = this.formatData(items);
    let popularTrips = trips.filter(trip => trip.popularTrips === true);
    console.log(popularTrips);
    this.setState({
      trips,
      popularTrips,
      sortedTrips: trips,
      loading: false,
    });
  }

  render() {
    return (
      <div>
        <TripContext.Provider value={{ ...this.state, getTrip: this.getTrip }}>
          {this.props.children}
        </TripContext.Provider>
      </div>
    );
  }
}

const TripConsumer = TripContext.Consumer;

export { TripProvider, TripConsumer, TripContext };

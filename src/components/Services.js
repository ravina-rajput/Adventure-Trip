import React, { Component } from 'react';
import Title from './Title';
import { FaHome, FaBus, FaHiking, FaHamburger } from 'react-icons/fa';

class Services extends Component {
  state = {
    services: [
      {
        icon: <FaHome />,
        title: 'Luxury Hotels',
        detail: 'Hotel room are provided with many facilities',
      },
      {
        icon: <FaBus />,
        title: 'Free Travel',
        detail: 'Pick & Drop service are free of cost',
      },
      {
        icon: <FaHiking />,
        title: 'Thrilling Hiking',
        detail: 'Exhilarating hiking all over the country',
      },
      {
        icon: <FaHamburger />,
        title: 'Quality Food',
        detail: 'Variety of foods are available',
      },
    ],
  };
  render() {
    const { services } = this.state;
    const showServices = services.map((data, index) => {
      return (
        <article key={index} className="service">
          <span>{data.icon}</span>
          <h6>{data.title}</h6>
          <p>{data.detail}</p>
        </article>
      );
    });
    return (
      <section className="services">
        <Title title="Services" />
        <div className="services-center">{showServices}</div>
      </section>
    );
  }
}

export default Services;

/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react';
import Hero from 'Components/Hero';
import { getServices } from 'store';
import ServiceItem from 'Components/service/ServiceItem';

class Home extends React.Component {
  // we set these service "store/service.js" to a state of Home page and then we will iterate on them
  state = {
    services: [],
  };

  componentDidMount() {
    const services = getServices();
    this.setState({ services: services });
  }

  renderServices = (services) => {
    return services.map((service) => (
      <ServiceItem key={service.id} service={service} />
    ));
  };

  render() {
    // destructrize the services from state
    const { services } = this.state;
    return (
      <div>
        <Hero />
        <section className='section section-feature-grey is-medium'>
          <div className='container'>
            <div className='title-wrapper has-text-centered'>
              <h2 className='title is-2'>Great Power Comes </h2>
              <h3 className='subtitle is-5 is-muted'>
                With great Responsability
              </h3>
              <div className='divider is-centered'></div>
            </div>

            {/* iterating over services */}
            <div className='content-wrapper'>
              <div className='columns'>{this.renderServices(services)}</div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Home;

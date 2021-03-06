/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react';

/* To access redux store we need to use connect function from react-redux. but remember uh must specify the 
   redux store in "Provider" wrapper
*/
import { connect } from 'react-redux'; // we will use connection function on our component. connect func is high order component
// -------------------------------------------
import Hero from 'Components/Hero';
import ServiceItem from 'Components/service/ServiceItem';
import { fetchServices } from 'actions';

class Home extends React.Component {
  // we set these service "store/service.js" to a state of Home page and then we will iterate on them
  state = {
    services: [],
  };

  componentDidMount() {
    //dispatch is dispatching actions
    // fetch services is action creator function that return simple object
    this.props.dispatch(fetchServices());

    // const services = getServices();
    // this.setState({ services: services });
  }

  renderServices = (services) => {
    return services.map((service) => (
      <ServiceItem key={service.id} service={service} />
    ));
  };

  render() {
    // destructrize the services from state
    // Now we are getting services from props not from state
    const { services } = this.props;
    // // redux test state is specified here
    // const { testingData, testingNumber } = this.props.test;
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

// before your page is displaying you are getting here into connect function
const mapStateToProps = (state) => {
  return {
    /* we ar getting Test as prop into our Home component. You will get it from State.service of redux store.
       state.service is specifed in redux store and after that you have access to this test into props of this page
       This key is what uh want to call your props in component. i write here test which now contain object data
       testingNumber and testingData
    */
    services: state.service.items,
  };
};

export default connect(mapStateToProps)(Home);

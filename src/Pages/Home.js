/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react';

/* To access redux store we need to use connect function from react-redux. but remember uh must specify the 
   redux store in "Provider" wrapper
*/
import { connect } from 'react-redux'; // we will use connection function on our component. connect func is high order component
// -------------------------------------------
import Hero from 'Components/Hero';
import { fetchServices } from 'actions';

/* components  */
import MidSection from 'Components/MidSection';
import ServiceItem from 'Components/service/ServiceItem';
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import MainSection from 'Components/MainSection';

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
        <motion.div
          exit='exit'
          variants={pageAnimation}
          initial='hidden'
          animate='show'
        >
          <MainSection />
          {/* <Hero /> */}
          <section className='section section-yellow is-medium'>
            <div className='container'>
              <MidSection />
            </div>
          </section>
          <section className='section section-feature-grey is-medium'>
            <div className='container'>
              {/* iterating over services */}
              <div className='content-wrapper'>
                <div className='columns'>{this.renderServices(services)}</div>
              </div>
            </div>
          </section>
        </motion.div>
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
    services: state.services.items,
  };
};

export default connect(mapStateToProps)(Home);

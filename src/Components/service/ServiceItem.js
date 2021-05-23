/* eslint jsx-a11y/anchor-is-valid: 0 */
import React from "react";
import { Link } from "react-router-dom";

// Styles
import { scrollReveal } from "../../animation";
import { useScroll } from "./../UseScroll";
import { Scroll } from "../../style";
import styled from "styled-components";

const ServiceItems = ({ service }) => {
  const shortText = (text, maxLenght = 50) => {
    if (!text) {
      return " ";
    }
    if (text.length <= maxLenght) {
      return text;
    }

    return text.substr(0, maxLenght) + "...";
  };
  const [element, controls] = useScroll();
  return (
    <div className="column is-one-third">
      <Services
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}
      >
        <div>
          <div
            className="feature-card is-bordered has-text-centered revealOnScroll delay-1"
            data-animation="fadeInLeft"
          >
            <div className="card-title">
              <h4>{service.title}</h4>
            </div>
            <div className="card-icon">
              <img src={service.image} alt="" />
            </div>
            <div className="card-text">
              <p>{shortText(service.description)}</p>
            </div>
            <div className="card-action">
              <Link
                to={`/services/${service.id}`}
                className="button btn-align-md accent-btn raised"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </Services>
    </div>
  );
};

const Services = styled(Scroll)``;

export default ServiceItems;

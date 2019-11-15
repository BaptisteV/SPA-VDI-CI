import React from "react";

import Map from "pigeon-maps";
import Marker from "pigeon-marker";
import EmptySpacer from "./parts/EmptySpacer";
import PageTopImage from "./parts/PageTopImage";
import contactImage from "./images/contact2.png";
import facebookIcon from "./images/facebook-icon.png";
import externalLinkIcon from "./images/external-link-icon-small.png";
import Credits from "./Credits";
import "./css/contact.css";

const position = [47.33405, 5.08245];

const map = (
  <div className="row">
    <div className="col"></div>
    <Map
      className="col-10"
      center={position}
      zoom={13}
      height={384}
      width={576}
    >
      <Marker anchor={position} />
    </Map>
    <div className="col"></div>
  </div>
);

class Contact extends React.Component {
  render() {
    return (
      <div className="container quick-fadein">
        <PageTopImage src={contactImage} alt="Contact" />
        <h3>Contact</h3>
        <hr />
        <div className="row">
          <b>Telephone&nbsp;:&nbsp;</b>
          <a href="tel:+3380678845">03 80 67 88 45</a>
        </div>
        <div className="row">
          <b>E-mail&nbsp;:&nbsp;</b>
          <a href="mailto: patrick.viloin@sfr.fr">patrick.viloin@sfr.fr</a>
        </div>
        <div className="row">
          <b>Facebook&nbsp;:&nbsp;</b>
          <a
            href="http://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={facebookIcon} alt="Facebook" />
            <span className="external-link-icon">
              <img alt="External link icon" src={externalLinkIcon} />
            </span>
          </a>
        </div>
        <EmptySpacer />
        <div className="row">
          <div className="col-md-4"></div>
          <ul className="list-group col-md-4">
            <li className="list-group-item">Viloin Diagnostic Immobilier</li>
            <li className="list-group-item">377 rue Gauthier</li>
            <li className="list-group-item">21850 Saint-Apollinaire</li>
          </ul>
          <div className="col-md-4"></div>
        </div>
        <EmptySpacer />
        {map}
        <EmptySpacer />
        <Credits />
      </div>
    );
  }
}

export default Contact;

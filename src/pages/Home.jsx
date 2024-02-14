import React from "react";
import { Link } from "react-router-dom";
const Home = (props) => {
  console.log({ props });
  return (
    <div className="dhiwise-navigation">
      <h1>Homepage</h1>
      <ul>
        <li>
          <Link to="/">jhfhjf</Link>
        </li>
        <li>
          <Link to="/aboutus">AboutUs</Link>
        </li>
        <li>
          <Link to="/listing">Listing</Link>
        </li>
        <li>
          <Link to="/listingmapview">ListingMapView</Link>
        </li>
        <li>
          <Link to="/propertydetails">PropertyDetails</Link>
        </li>
        <li>
          <Link to="/agentlist">sfdhjfs</Link>
        </li>
        <li>
          <Link to="/agentprofile">AgentProfile</Link>
        </li>
        <li>
          <Link to="/contactpage">ContactPage</Link>
        </li>
        <li>
          <Link to="/blogpage">BlogPage</Link>
        </li>
        <li>
          <Link to="/blogdetails">BlogDetails</Link>
        </li>
        <li>
          <Link to="/error">Error</Link>
        </li>
        <li>
          <Link to="/faq">FAQ</Link>
        </li>
        <li>
          <Link to="/privacypolicy">PrivacyPolicy</Link>
        </li>
        <li>
          <Link to="/license">License</Link>
        </li>
      </ul>
    </div>
  );
};
export default Home;

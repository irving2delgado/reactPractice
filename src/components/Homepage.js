import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => (
    <div className="home-hero">
        <h1> Basketball Simulation</h1>
        <h4> The Basketball Simulation Game </h4>
        <Link to="/players" className="btn btn-primary">
            Get Started
        </Link>
    </div>
);

export default Homepage;
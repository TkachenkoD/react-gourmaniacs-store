import React, { Component } from "react";
import Title from "./Title";
import AboutItem from "./AboutItem";

import { aboutData } from "../aboutData";

export default class About extends Component {
  render() {
    return (
      <div className="py-5">
        <div className="container">
          <Title name="About" title="project" />
          <div className="row">
            <p>
              more about{" "}
              <a href="https://gourmaniacs.netlify.com">Gourmaniacs project</a>
            </p>
            {aboutData.map((aboutItem, index) => {
              return <AboutItem key={index} passedProp={aboutItem} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

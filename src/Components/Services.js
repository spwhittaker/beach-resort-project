import React, { Component } from "react";
import Title from "./Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "Free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, mollitia?",
      },
      {
        icon: <FaHiking />,
        title: "Endless hiking",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, mollitia?",
      },
      {
        icon: <FaShuttleVan />,
        title: "Free shuttle bus",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, mollitia?",
      },
      {
        icon: <FaBeer />,
        title: "Strongest beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, mollitia?",
      },
    ],
  };
  render() {
    return (
      <section className="services">
        <Title title="services"></Title>
        <div className="services-center">
          {this.state.services.map((item, index) => (
            <article key={index} className="service">
              <span>{item.icon}</span>
              <h6>{item.title}</h6>
              <p>{item.info}</p>
            </article>
          ))}
        </div>
      </section>
    );
  }
}

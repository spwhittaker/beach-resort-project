import React, { Component } from "react";
import defaultBcg from "../images/room-1.jpeg";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import { RoomContext } from "../context";
import StyledHero from "../Components/StyledHero";
class Room extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slug: this.props.match.params.slug,
      defaultBcg,
    };
  }
  static contextType = RoomContext;
  componentDidMount() {}
  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.slug);

    if (!room) {
      return (
        <div className="error">
          <h3>No such room could be found...</h3>
          <Link to="/rooms" className="btn-primary">
            Back to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images,
    } = room;

    const [mainImg, ...defaultImgs] = images;
    return (
      <>
        <StyledHero img={mainImg || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              Back to Rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {defaultImgs.map((image, index) => (
              <img src={image} alt={name} key={index} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>Details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price: ${price}</h6>
              <h6>size: {size} SQ FT</h6>
              <h6>
                Max Capacity:{" "}
                {capacity > 1 ? `${capacity} people` : `{capacity} person`}
              </h6>
              <h6>{pets ? "Pets allowed" : "No pets allowed"}</h6>
              {breakfast && <h6>Free breakfast included</h6>}
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>Extras</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}

export default Room;

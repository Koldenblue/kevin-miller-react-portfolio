import React from "react";
import Background from "../components/Background";
import Carousel from "react-bootstrap/Carousel";

class Pictures extends React.Component {
  render() {
    return (
      <>
        <Background image='../assets/images/shore.jpg' />

        <main id="carousel-box" class='bottom-space'>
          <div class="nav-avoid container-lg">
            <Carousel>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/images/guitar3.jpg")}
                  alt="Playing the Bass"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/images/saskia2.JPG")}
                  alt="Me and my dog, Saskia"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/images/self2.jpg")}
                  alt="me"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/images/diploma.JPG")}
                  alt="PhD diploma"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/images/dissertation.JPG")}
                  alt="dissertation title"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={require("../assets/images/dissertation-page.JPG")}
                  alt="page from dissertation"
                />
              </Carousel.Item>

            </Carousel>
          </div>
        </main>
      </>
    )
  }
}

export default Pictures;
import React from "react";
import { Carousel } from "react-bootstrap";
import first from "../../assets/first.jpg";
import sec from "../../assets/sec.jpg";
const Slider = () => {
  return (
    <section className="slider">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <h2>Testimonials</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <Carousel>
              <Carousel.Item>
                <img src={first} />
                <Carousel.Caption>
                  <p>
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts."
                  </p>
                  <span>Maccy Doe - Front End</span>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img src={sec} />

                <Carousel.Caption>
                  <p>
                    "Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live far from the countries Vokalia."
                  </p>
                  <span>Johnthan Doe - UX Designer</span>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Slider;

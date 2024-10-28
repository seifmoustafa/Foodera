import React from "react";
import header from "../../assets/header.png";

const Pride = () => {
  return (
    <section className="pride">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <img src={header} title="pride image" />
          </div>
          <div className="col-md-6">
            <h2>
              We pride ourselves on making real food from the best ingredients.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.
            </p>
            <button>
              <a href="#" />
              learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Pride;

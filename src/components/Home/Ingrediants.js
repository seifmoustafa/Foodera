import React from "react";
import home1 from "../../assets/home1.png";

const Ingredients = () => {
  return (
    <section className="ingredients">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2>
              We make everything by hand with the best possible ingredients.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus.Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
            </p>
            <ul>
              <li>Etiam sed dolor ac diam volutpat.</li>
              <li>Erat volutpat aliquet imperdiet.</li>
              <li>purus a odio finibus bibendum.</li>
            </ul>
            <button>
              <a href="#">learn more</a>
            </button>
          </div>
          <div className="col-md-6">
            <img src={home1} alt="intgrediants" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Ingredients;

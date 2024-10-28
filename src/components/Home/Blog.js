import React from "react";
import Data from "../../Data";

const Blog = () => {
  const MealItem = Data.map((item) => {
    return (
      <div className="col-md-4">
        <div className="box">
          <img src={item.img} />
          <h5> {item.title}</h5>
          <span>{item.time}</span>
          <h6>{item.price}</h6>

        </div>
        <button><a href="#">Order Now</a></button>
      </div>
    );
  });
  return (
    <section className="blog">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <h2>Explore Our Foods</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus. Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove.
            </p>
          </div>
        </div>
        <div className="row">{MealItem}</div>
      </div>
    </section>
  );
};
export default Blog;

import React, { Fragment } from "react";
import Header from "./Header";
import "./Home.css"
import Blog from "./Blog";
import Numbers from "./Numbers";
import Pride from "./Pride";
import Ingredients from "./Ingrediants";
const Home = () => {
    return (
        <Fragment>
            <Header />
            <Numbers/>
            <Pride />
            <Ingredients />
            <section className="paralex">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <h2>
                            When a man's stomach is full it makes no<br/>
                            difference whether he is rich or poor.
                            </h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio <br/>
                            finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                            <a href="#">Watch Our Story</a>
                        </div>
                    </div>
                </div>
            </section>
            <Blog />
        </Fragment>


    );
}

export default Home;
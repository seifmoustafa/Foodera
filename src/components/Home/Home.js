import React, { Fragment } from "react";
import Header from "./Header";

import "./Home.css"
const Home = () => {
    return (
        <Fragment>
            <Header />
            <section class='numbers'>
                <div class='container'>
                    <div class='row'>
                        <div class='col-md-3'>
                            <h2>1287+</h2>
                            <h6>SAVING</h6>

                        </div>
                        <div class='col-md-3'>
                            <h2>4587+</h2>
                            <h6>PHOTOS</h6>

                        </div>
                        <div class='col-md-3'>
                            <h2>1485+</h2>
                            <h6>ROCKETS</h6>

                        </div>
                        <div class='col-md-3'>
                            <h2>1287+</h2>
                            <h6>GLOBES</h6>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>


    );
}

export default Home;
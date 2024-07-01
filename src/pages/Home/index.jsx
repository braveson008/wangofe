import React from "react";
import CitySelector from "./components/CitySelector";
import AreaSelector from "./components/AreaSelector";
import StartParkingButton from "./components/StartParkingButton";
import { useStore } from "zustand";
import Auth from "../Auth";

const Home = () => {
  return (
    <div className="hero_area">
      <header className="header_section">
        <div className="container-fluid">
          <nav className="navbar navbar-expand-lg custom_nav-container">
            <a className="navbar-brand" href="/">
              <span>Wango parking</span>
            </a>
          </nav>
        </div>
      </header>
      <section className="slider_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-8 mx-auto">
              <div className="detail-box">
                <h1>Park your car</h1>
                <p>
                  After choosing the city please choose the parking area and hit
                  "pay with Wango" button.
                </p>
              </div>
            </div>
          </div>
          <div className="find_container">
            <div className="container">
              <div className="row">
                <div className="col">
                  <form>
                    <div className="form-row">
                      <div className="form-group col-lg-3">
                        <CitySelector />
                      </div>
                      <div className="form-group col-lg-3">
                        <AreaSelector />
                      </div>
                      <div className="form-group col-lg-3">
                        <div className="btn-box">
                          <StartParkingButton />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

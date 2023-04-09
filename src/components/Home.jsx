import React from "react";
import { Link } from "react-router-dom";
import ScooterGuy from "../Images/ScooterGuy.png"
import Delivery from "./Delivery";
import FastedDelivery from "./FastedDelivery";


export default function Home() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12 serviceDiv mb-5">
                    <h1 className="m-2">Super fast <span>Food delivery</span> service</h1>
                    <p className="m-2">We provide super fast-delivery service. Let's use our services right now and get discounts of up to 50%</p>
                    <div className="mt-5 exploreDiv">
                        <button className="btn exploreBtn text-white">Explore Food</button>
                        <Link className="m-2 text-dark">Download App</Link>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 text-center">
                    <img src={ScooterGuy} alt="" className="scooterGuy" />
                </div>
            </div>

            <Delivery />
            <FastedDelivery />
        </div>
    )
}
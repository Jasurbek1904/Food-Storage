import React from "react";

export default function TopCities() {
    return (
        <div className="container">
            <h1>New York City</h1>
            <div className="row">
                <div className="col-md-4 card">
                    <img src="https://i.natgeofe.com/k/5b396b5e-59e7-43a6-9448-708125549aa1/new-york-statue-of-liberty_2x1.jpg" alt="" className="w-100 h-100 p-2" />
                </div>
                <div className="col-md-4 card">
                    <img src="https://a.storyblok.com/f/112937/568x464/ee69e56923/10-reasons-to-love-new-york_568x464.jpg/m/620x0/filters:quality(70)/" alt="" className="w-100 h-100 p-2" />
                </div>
                <div className="col-md-4 card">
                    <img src="https://vtv1.mediacdn.vn/zoom/700_438/2021/5/11/photo-1-16207471415161512962798-crop-16207471586651881117237.jpg" alt="" className="w-100 h-100 p-2" />
                </div>
            </div>
        </div>
    )
}
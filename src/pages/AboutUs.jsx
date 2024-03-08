import React from "react";

function AboutUs() {
    return (
        <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold">Foodie</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Bringing class to cuisine since 1975.</p>
            </div>
            <div className="overflow-hidden" style={{maxheight: "30vh"}}>
                <div className="container px-5">
                    <img src="https://jongreganot-images.s3.ap-northeast-1.amazonaws.com/food-order/restaurant.jpg" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Example image" width="700" height="500" loading="lazy"></img>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
import React from "react";

function Hero () {
    return (
    <header className="masthead bg-primary text-white text-center">
            <div className="container d-flex align-items-center flex-column">
                {/* <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="" /> */}
                <img className="masthead-avatar mb-5" src="assets/img/deni02.png" alt="" />
                
                <h1 className="masthead-heading text-uppercase mb-0">Deni Andriani</h1>
                <div className="divider-custom divider-light">
                    <div className="divider-custom-line"></div>
                    <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                    <div className="divider-custom-line"></div>
                </div>

                {/* <!-- Masthead Subheading--> */}
                <p className="masthead-subheading font-weight-light mb-0">Web Developer - Web Designer - Geek</p>
            </div>
        </header>


    );
}



export default Hero;
import React from "react";

function Universe() {
  return (
    <div className="container text-center my-5">

      <h2 className="fw-bold mb-2">The Zerodha Universe</h2>
      <p className="text-muted mb-5">
        Extend your trading and investment experience even further with our partner platforms
      </p>

      <div className="row">

        {/* ITEM */}
        <div className="col-md-4 mb-5">
          <div className="d-flex justify-content-center align-items-center mb-3" style={{ height: "70px" }}>
            <img
              src="media/images/zerodhaFundhouse.png"
              className="img-fluid"
              style={{ maxHeight: "60px" }}
              alt=""
            />
          </div>
          <p className="text-muted small px-3">
            Our asset management venture creating simple and transparent index
            funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <div className="d-flex justify-content-center align-items-center mb-3" style={{ height: "70px" }}>
            <img
              src="media/images/sensibullLogo.svg"
              className="img-fluid"
              style={{ maxHeight: "60px" }}
              alt=""
            />
          </div>
          <p className="text-muted small px-3">
            Options trading platform that lets you create strategies, analyze
            positions, and study market data.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <div className="d-flex justify-content-center align-items-center mb-3" style={{ height: "70px" }}>
            <img
              src="media/images/tijori.svg"
              className="img-fluid"
              style={{ maxHeight: "60px" }}
              alt=""
            />
          </div>
          <p className="text-muted small px-3">
            Investment research platform offering insights on stocks, sectors,
            supply chains, and more.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <div className="d-flex justify-content-center align-items-center mb-3" style={{ height: "70px" }}>
            <img
              src="media/images/streakLogo.png"
              className="img-fluid"
              style={{ maxHeight: "60px" }}
              alt=""
            />
          </div>
          <p className="text-muted small px-3">
            Systematic trading platform enabling backtesting and automation
            without coding.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <div className="d-flex justify-content-center align-items-center mb-3" style={{ height: "70px" }}>
            <img
              src="media/images/smallcaseLogo.png"
              className="img-fluid"
              style={{ maxHeight: "60px" }}
              alt=""
            />
          </div>
          <p className="text-muted small px-3">
            Thematic investing platform offering baskets of stocks and ETFs to
            help you diversify.
          </p>
        </div>

        <div className="col-md-4 mb-5">
          <div className="d-flex justify-content-center align-items-center mb-3" style={{ height: "70px" }}>
            <img
              src="media/images/dittoLogo.png"
              className="img-fluid"
              style={{ maxHeight: "60px" }}
              alt=""
            />
          </div>
          <p className="text-muted small px-3">
            Personalized advice on health and life insurance with no spam or
            mis-selling.
          </p>
        </div>

      </div>

      <button className="btn btn-primary px-5 py-2 fs-5">
        Sign up for free
      </button>

    </div>
  );
}

export default Universe;

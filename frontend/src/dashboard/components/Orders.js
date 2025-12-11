import React from "react";
import { Link } from "react-router-dom";

const Orders = () => {
  return (
    <div className="orders">
      <div className="no-orders">
        <p>You haven't placed any orders today</p>

        <div to={"/"} className="btn">
          Get started
        </div>
      </div>
    </div>
  );
};

export default Orders;
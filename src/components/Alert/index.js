import React from "react";

function index({ alert }) {
  return (
    <div className="alert-container">
      <div className={`alertBox ${alert.type}`}>
        {alert.type}
        {alert.message}
      </div>
    </div>
  );
}

export default index;

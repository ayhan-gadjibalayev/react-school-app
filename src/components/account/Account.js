import React from "react";

export default function Account() {
  return (
    <div>
      <div className="header">
        <span className="credit">Credit payment</span>
        <span>⨉</span>
      </div>

      <div className="left-block-account">
        <div className="regular-payment-block">
          <div className="regular-block">
            <span className="regular">Regular payment</span>
            <span>
              <span style={{ color: "grey" }}>Currency:</span> BTC
            </span>
          </div>

          <span style={{ fontSize: "40px" }}>1,2 BTC</span>
        </div>

        <hr className="hr-regular"></hr>
        <span style={{ margin: "40px", fontSize: "20px" }}>Select Wallet </span>

        <div className="select-left-block">
            <img />
            <span>Matemask</span>
        </div>
        <div className="select-center-block"></div>
        <div className="select-right-block"></div>
      </div>

      <div></div>
    </div>
  );
}

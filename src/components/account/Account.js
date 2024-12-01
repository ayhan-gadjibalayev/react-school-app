import React from "react";
import fox from "../../images/fox.png";
import exo from "../../images/exo.png";
import zengo from "../../images/zengo.png";
import { FaEdit } from "react-icons/fa";
import { PiSpinnerBallFill } from "react-icons/pi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Account() {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);

  const buttonClick = () => {
    setIsVisible((prevState) => !prevState);

    const timer = setTimeout(() => {
      setIsVisible(false);
      clearTimeout(timer);
      navigate("/transaction");
    }, 5000);
  };

  return (
    <div className="container-credit">
      {isVisible && (
        <div className="back-drop">
            <span className="pivont-point">Загрузка</span>
          <div className="square"><PiSpinnerBallFill  className="spinner"/></div>
        </div>
      )}

      <div className="header">
        <span className="credit">Credit payment</span>
        <span>⨉</span>
      </div>

      <div className="container-www">
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
          <span style={{ marginLeft: "40px", fontSize: "20px" }}>
            Select Wallet
          </span>

          <div className="select-block">
            <div className="select-left-block">
              <img src={fox} alt="fox" className="fox" />
              <span>Matemask</span>
            </div>
            <div className="select-left-block select-center-block">
              <img src={exo} alt="exo" className="fox" />
              <span>Exodus</span>
            </div>
            <div className="select-left-block select-center-block">
              <img src={zengo} alt="zengo" className="fox" />
              <span>Zengo</span>
            </div>
          </div>

          <p style={{ margin: "60px 0 40px 40px", fontSize: "20px" }}>
            Select Currency
          </p>

          <div className="select-currency-block">
            <div className="bitcoin-block">
              <input type="radio" className="radio" />
              <span className="btc-icon">BTC</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Bitcoin</span>
                  <span style={{ color: "red", fontSize: "10" }}>-18,68%</span>
                </div>
                <span className="currency">13.3 BTC</span>
              </div>
            </div>
            <div className="bitcoin-block">
              <input type="radio" className="radio" />
              <span className="btc-icon">ETH</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <span>Ethereum</span>
                  <span style={{ color: "green", fontSize: "10" }}>+8,68%</span>
                </div>
                <span className="currency eth">6.1 ETH</span>
              </div>
            </div>
            <div className="bitcoin-block">
              <input type="radio" className="radio" />
              <span className="btc-icon">LTC</span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginLeft: "20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <span>LiteCoin</span>
                  <span style={{ color: "red", fontSize: "10" }}>-18,68%</span>
                </div>
                <span className="currency">15.4 LTC</span>
              </div>
            </div>
          </div>
        </div>
        <div className="right-block-account">
          <p className="regular-payment-right-block">Regular payment</p>

          <div>
            <div className="type-block">
              <span className="type-grey">Type</span>
              <span>Month payment</span>
            </div>
            <div className="type-block">
              <span className="type-grey">currency</span>
              <span>BTC</span>
            </div>
            <div className="type-block">
              <span className="type-grey">Transaction fee</span>
              <span>0,000024 BTC</span>
            </div>
          </div>
          <div>
            <span className="walet-number"> walet number</span>
            <input
              className="wallet-number-input"
              defaultValue="IJBU32R6DsfsdTCYU342TTURC4f]sssfgd4S678I8J8FUD576U"
            />
          </div>
          <div className="Total-block">
            <div className="total-edit-block">
              <div className="total-edit">
                <span style={{ color: "#5E5D5B" }}>Total</span>
                <FaEdit color="#616060" />
              </div>
              <span className="btc-total">1.2 BTC</span>
            </div>
          </div>

          <div className="button-payment" onClick={buttonClick}>
            <span className="right-arrow">⮞</span>
            <span className="mike-payment">Mike a payment</span>
          </div>
        </div>
      </div>
    </div>
  );
}

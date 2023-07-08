import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Currency = () => {
  const { dispatch } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [currencyName, setCurrencyName] = useState("£ Pound");
  const changeCurrency = (val) => {
    setCurrencyName(val);
    dispatch({
      type: "CHG_CURRENCY",
      payload: val.split(" ")[0],
    });
    setShow(!show);
  };

  return (
    <div className="dropdown">
      <button
        style={{ backgroundColor: "rgb(24, 223, 24)" }}
        className="btn btn-success dropdown-toggle "
        type="button"
        onClick={() => setShow(!show)}
      >
        Currency ({currencyName})
      </button>
      <ul
        style={{ backgroundColor: "rgb(24, 223, 24)" }}
        className={`dropdown-menu ${show ? "show" : ""}`}
      >
        <li onClick={(event) => changeCurrency("$ Dollar")}>
          <span className="dropdown-item">$ Dollar</span>
        </li>
        <li onClick={(event) => changeCurrency("£ Pound")}>
          <span className="dropdown-item">£ Pound</span>
        </li>
        <li onClick={(event) => changeCurrency("€ Euro")}>
          <span className="dropdown-item">€ Euro</span>
        </li>
        <li onClick={(event) => changeCurrency("₹ Ruppee")}>
          <span className="dropdown-item">₹ Ruppee</span>
        </li>
      </ul>
    </div>
  );
};

export default Currency;

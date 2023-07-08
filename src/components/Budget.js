import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
const Budget = () => {
  const { expenses, budget, dispatch, currency } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  const chandeBadget = (value) => {
    if (budget - totalExpenses > value) {
      alert(
        `The value cannot exceed remaining funds  ${currency} ${
          budget - totalExpenses
        }`
      );
      return;
    }
    if (value > 20000) {
      alert(`The value cannot exceed remaining funds  ${currency} 20000`);
      return;
    }
    dispatch({
      type: "SET_BUDGET",
      payload: value,
    });
  };
  return (
    <div className="alert alert-secondary w-100 d-flex align-items-center">
      Budget :{currency}
      <input
        min={budget - totalExpenses}
        max={20000}
        required="required"
        type="number"
        id="cost"
        value={budget}
        style={{ marginLeft: "3px", maxWidth: "150px" }}
        onChange={(event) => chandeBadget(event.target.value)}
      />
    </div>
  );
};

export default Budget;

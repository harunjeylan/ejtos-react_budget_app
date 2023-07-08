import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TiDelete } from "react-icons/ti";
import { FaPlusCircle } from "react-icons/fa";
import { FaMinusCircle } from "react-icons/fa";

const ExpenseItem = (props) => {
  const { dispatch, currency } = useContext(AppContext);
  const handleDeleteExpense = () => {
    dispatch({
      type: "DELETE_EXPENSE",
      payload: props.id,
    });
  };
  const increaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: 10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  const decreaseAllocation = (name) => {
    const expense = {
      name: name,
      cost: -10,
    };
    dispatch({
      type: "ADD_EXPENSE",
      payload: expense,
    });
  };
  return (
    <tr>
      <td>{props.name}</td>
      <td>
        {currency}
        {props.cost}
      </td>
      <td>
        <FaPlusCircle
          size="2em"
          color="rgb(24, 223, 24)"
          onClick={(event) => increaseAllocation(props.name)}
        >
          +
        </FaPlusCircle>
      </td>
      <td>
        <FaMinusCircle
          size="2em"
          color="red"
          onClick={(event) => decreaseAllocation(props.name)}
        >
          -
        </FaMinusCircle>
      </td>
      <td>
        <TiDelete size="1.5em" onClick={handleDeleteExpense}></TiDelete>
      </td>
    </tr>
  );
};

export default ExpenseItem;

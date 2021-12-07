import FilterPrimary from "./FilterPrimary";
import FilterOptions from "./FilterOptions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ordersActions } from "../../store/orders";
import Mocks from "../../mocks/orders.json";

export const OrdersFilter = ({ className = "filter" }) => {
  const [optionsVision, setOptionsVision] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    dispatch(ordersActions.setOrders(Mocks));
    setInputValue("");
    const value = event.currentTarget.searchbar.value;
    if (value === "") {
      dispatch(ordersActions.setOrders(Mocks));
      setInputValue("");
    } else {
      dispatch(ordersActions.searchOrders(value));
      setInputValue(value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOptionsVisible = (event) => {
    event.preventDefault();
    setOptionsVision(!optionsVision);
  };

  const resetFiltersHandler = (event) => {
    event.preventDefault();
    dispatch(ordersActions.setOrders(Mocks));
    setInputValue("");
    const fiterOptionsForm = document.forms["options"];
    const inputs = fiterOptionsForm.getElementsByTagName("input");
    for (let item of inputs) {
      item.value = "";
    }
  };

  const handleButtonReset = (event) => {
    event.preventDefault();
    setInputValue("");
    dispatch(ordersActions.setOrders(Mocks));
  };

  return (
    <div className={className}>
      <FilterPrimary
        onChange={handleChange}
        onSubmit={handleSubmit}
        buttonFiltersHandler={handleOptionsVisible}
        resetFiltersHandler={resetFiltersHandler}
        onClick={handleButtonReset}
        value={inputValue}
      />
      <FilterOptions isVisible={optionsVision} />
    </div>
  );
};

import Button from "../../components/Button";
import { RangeFilter } from "./RangeFilter";
import StatusFilter from "./StatusFilter";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordersActions } from "../../store/orders";
import { dropdownActions } from "../../store/statusDropdown";
import { formatDateFilterValue } from "../../utils/FormatFunctions";
import { datePicker } from "../../utils/datePicker";

const wrapperMainClass = "filter__wrapper";
const formClassName = "filter__form";
const buttonClassName =
  "filter-button filter-button_hidden-icon filter-button_short";

const FilterOptions = ({ isVisible }) => {
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const [sumStart, setSumStart] = useState(0);
  const [sumEnd, setSumEnd] = useState(Infinity);

  const statusData = useSelector((state) => state.dropdown);
  const statuses = String(statusData) ? statusData.join(", ") : "Любой";

  const dispatch = useDispatch();

  datePicker("#dateStart");
  datePicker("#dateEnd", formatDateFilterValue(dateStart));

  const wrapperClassName = isVisible
    ? wrapperMainClass
    : [wrapperMainClass, wrapperMainClass + "_hidden"].join(" ");

  const handleInputClear = (event) => {
    event.preventDefault();
    const currentInput = event.currentTarget.parentNode.children[0];
    console.log(currentInput);
    currentInput.value = "";
    currentInput.name === "start" ? setDateStart("") : setDateEnd("");
  };

  const handleInputDateValue = (event) => {
    const InputName = event.target.name;
    InputName === "start"
      ? setDateStart(event.target.value)
      : setDateEnd(event.target.value);
  };

  const handleInputSumValue = (event) => {
    const InputName = event.target.name;
    console.log(InputName);
    InputName === "start"
      ? setSumStart(event.target.value)
      : setSumEnd(event.target.value);
  };

  const setDateFilterOptions = (dateStart, dateEnd) => {
    const minDate = dateStart
      ? formatDateFilterValue(dateStart)
      : new Date(1900);
    const maxDate = dateEnd ? formatDateFilterValue(dateEnd) : Date.now();
    dispatch(ordersActions.filterOrdersByDate(minDate, maxDate));
  };

  const setSumFilterOptions = (sumStart, sumEnd) => {
    const minSum = sumStart ? sumStart : 0;
    const maxSum = sumEnd ? sumEnd : 1000000;
    dispatch(ordersActions.filterOrdersBySum(minSum, maxSum));
  };

  const setStatusFilterOptions = () => {
    dispatch(ordersActions.filterOrdersByStatus(statuses));
  };

  const handleButtonSubmit = (event) => {
    event.preventDefault();
    setDateFilterOptions(dateStart, dateEnd);
    setSumFilterOptions(sumStart, sumEnd);
    if (statuses !== "Любой") {
      setStatusFilterOptions();
    }
  };

  const handleStatusFilterChange = (event) => {
    const value = event.target.name;
    console.log(value);
    dispatch(dropdownActions.setStatuses(value));
  };

  return (
    <div className={wrapperClassName}>
      <form className={formClassName} name="options">
        <RangeFilter
          filterTitle="Дата оформления"
          inputStartId="dateStart"
          InputEndId="dateEnd"
          onClick={handleInputClear}
          onBlur={handleInputDateValue}
          onChange={handleInputDateValue}
        >
          Дата оформления
        </RangeFilter>

        <StatusFilter
          statusValue={statuses}
          onChange={handleStatusFilterChange}
        >
          Статус заказа
        </StatusFilter>

        <RangeFilter
          filterPlaceholder="₽"
          isShort
          onChange={handleInputSumValue}
          onClick={handleInputClear}
        >
          Сумма заказа
        </RangeFilter>

        <Button className={buttonClassName} onClick={handleButtonSubmit}>
          Применить
        </Button>
      </form>
    </div>
  );
};

export default FilterOptions;

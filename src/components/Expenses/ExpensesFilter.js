import "./ExpensesFilter.css";
import { useState } from "react";

const ExpensesFilter = (props) => {
  const [enteredYear, setEnteredYear] = useState("");

  const yearfilterChangeHandler = (event) => {
    setEnteredYear(event.target.value);
    props.onChangefilerYear(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={yearfilterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;

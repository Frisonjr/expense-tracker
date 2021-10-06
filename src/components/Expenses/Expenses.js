import React, { useMemo, useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState(undefined);

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  // const filteredExpenses = props.items.filter((expense) => {
  //   return expense.date.getFullYear().toString() === filteredYear;
  // });

  const filteredExpenses = useMemo(() => {
    if (filteredYear) {
      return props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
      });
    } else {
      return props.items;
    }
  }, [filteredYear, props]);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;

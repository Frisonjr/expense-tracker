import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.87,
      date: new Date(2021, 10, 4),
    },
    {
      title: "Bandeclay",
      amount: 10,
      date: new Date(2021, 10, 1),
    },
  ];
  return (
    <div>
      <h1>LET'S GOOOOOOOOOOOOOOOOOOOOOOO</h1>
      <p>Testing my html elements</p>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;

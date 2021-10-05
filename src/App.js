import React from 'react';

import Expenses from './components/Expenses/Expenses';


const App = () => {
  const expenses = [
    {
      title: "Car Insurance",
      amount: 294.87,
      date: new Date(2452, 10, 1),
    },
    {
      title: "Bandeclay",
      amount: 10,
      date: new Date(1989, 11, 2),
    },
    {
      title: "sdasd",
      amount: 10,
      date: new Date(2021, 12, 25),
    },
    {
      title: "gdgdfg",
      amount: 10,
      date: new Date(1998, 9, 1),
    },
  ];

  return (
    <div>
      <div>LETS F#CKING GOOOOOOOOOOO</div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;

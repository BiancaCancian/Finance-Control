
import React, {useState, useEffect} from 'react';
import Header from "./components/Header"
import Resume from "./components/Resume"
import Form from "./components/Form"
import GlobalStyle from './styles/global';


const App = () => {
  const data = localStorage.getItem("transactions");
  const [transactionList, setTransactionList] = useState(
    data ? JSON.parse(data) : []
  );
  const [income, SetIncome] = useState(0);
  const [expense, SetExpense] = useState(0);
  const [total, SetTotal] = useState(0);

  useEffect(() =>{
    const amountExpense = transactionList
    .filter((item) => item.expense) 
    .map((transaction) => Number(transaction.amount));

    const amountIncome = transactionList
    .filter((item) => !item.expense) 
    .map((transaction) => Number(transaction.amount));

    const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
    const income = amountIncome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

    const total = Math.abs(income - expense).toFixed(2);

    SetIncome(`R$ ${income}`);
    SetExpense(`R$ ${expense}`);
    SetTotal(`${Number(income) < Number(expense) ? "-" : ""}R$ ${total}`);

  }, [transactionList]);

  const handleAdd = (transaction) => {
    const newArrayTransactions = [...transactionList, transaction];

    setTransactionList(newArrayTransactions);

    localStorage.setItem("trasactions", JSON.stringify(newArrayTransactions));

  };


  return (
    <>
     <Header />
     <Resume income={income} expense={expense} total={total} />
     <Form handleAdd={handleAdd} transactionList={transactionList} setTransactionList={setTransactionList} />
    <GlobalStyle />
      
    </>
  );
};

export default App;
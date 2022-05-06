import React from "react";
import { AddTransaction } from "./AddTransaction";
import { Balance } from "./Balance";
import { Header } from "./Header";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </>
  );
};

export default Dashboard;

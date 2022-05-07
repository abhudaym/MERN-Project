import React, { useEffect, useContext } from "react";
import { AddTransaction } from "./AddTransaction";
import { Balance } from "./Balance";
import { Header } from "./Header";
import { IncomeExpenses } from "./IncomeExpenses";
import { TransactionList } from "./TransactionList";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user } = useContext(GlobalContext);
  let navigate = useNavigate();
  console.log(user);
  useEffect(() => {
    if (user && user._id) console.log(user);
    else {
      navigate("/login");
    }
  }, [user]);
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

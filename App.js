import React, { useState, useEffect } from "react";
import "./App.css"; 

import Withdraw from "./Component/Withdraw";
import Balance from "./Component/Balance";
import Deposit from "./Component/Deposit";

function App() {
 const [balance, setBalance] = useState(1000);
 
 useEffect(() => {
  console.log("Booting up ATM...ATM is ready!");

  return () => {
    console.log("ATM shutting down...");
  };
}, []);

  useEffect(() => {
    console.log(`Current amount: ${balance}`);
  }, [balance]); 
 


  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showDeposit, setShowDeposit] = useState(false);
  const [showBalance, setShowBalance] = useState(false);

  const handleDeposit = (amount) => {
    setBalance((prevBalance) => prevBalance + amount);
  };

  const handleWithdraw = (amount) => {
    setBalance((prevBalance) => prevBalance - amount);
  };

  return (
    <div className="atm-container">
      <h1 className="atm-title">Bank ATM</h1>
      <div className="atm-buttons">
        <button onClick={() => setShowWithdraw(!showWithdraw)}>Withdraw</button>
        <button onClick={() => setShowDeposit(!showDeposit)}>Deposit</button>
        <button onClick={() => setShowBalance(!showBalance)}>Balance</button>
      </div>
      <div className="atm-components">
        {showWithdraw && (
          <Withdraw balance={balance} onWithdraw={handleWithdraw} />
        )}
        {showDeposit && <Deposit onDeposit={handleDeposit} />}
        {showBalance && <Balance balance={balance} currency={"SEK"} />}
      </div>
    </div>
  );
}

export default App;

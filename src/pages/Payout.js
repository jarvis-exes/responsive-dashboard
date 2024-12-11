import React, { useState } from "react";
import PayoutTable from "../components/PayoutTable";

const Payout = () => {
  const [payoutData, setPayoutData] = useState([
    { author: "John Doe", articles: 10, rate: 5 },
    { author: "Jane Smith", articles: 8, rate: 7.5 },
    { author: "Alice Brown", articles: 12, rate: 6 },
  ]);

  // Update the payout rate
  const handleRateChange = (author, newRate) => {
    const updatedData = payoutData.map((item) =>
      item.author === author ? { ...item, rate: newRate } : item
    );
    setPayoutData(updatedData);
  };

  const calculateTotalPayout = () => {
    return payoutData
      .reduce((total, item) => total + item.articles * item.rate, 0)
      .toFixed(2);
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Payout Details</h2>
      <PayoutTable data={payoutData} onRateChange={handleRateChange} />
      <div className="mt-4 text-lg font-semibold">
        <p>Total Payout: ${calculateTotalPayout()}</p>
      </div>
    </div>
  );
};

export default Payout;

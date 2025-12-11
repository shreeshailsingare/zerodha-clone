import React, { useState, useEffect } from "react";
import axios from "axios";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
  const [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get(`${process.env.REACT_APP_API_URL}/allHoldings`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        console.log("Holdings API Response:", res.data);
        setAllHoldings(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => {
        console.error(err);
        setAllHoldings([]);
      });
  }, []);

  const labels = Array.isArray(allHoldings)
    ? allHoldings.map((item) => item.name)
    : [];

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: Array.isArray(allHoldings)
          ? allHoldings.map((stock) => stock.price)
          : [],
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Avg. cost</th>
              <th>Qty.</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>

          <tbody>
            {Array.isArray(allHoldings) &&
              allHoldings.map((stock, index) => {
                const curValue = stock.price * stock.qty;
                const isProfit = curValue - stock.avg * stock.qty >= 0.0;
                const profClass = isProfit ? "profit" : "loss";
                const dayClass = stock.isLoss ? "loss" : "profit";

                return (
                  <tr key={index}>
                    <td>{stock.name}</td>
                    <td>{stock.avg.toFixed(2)}</td>
                    <td>{stock.qty}</td>
                    <td>{stock.price.toFixed(2)}</td>
                    <td>{curValue.toFixed(2)}</td>
                    <td className={profClass}>
                      {(curValue - stock.avg * stock.qty).toFixed(2)}
                    </td>
                    <td className={profClass}>{stock.net}</td>
                    <td className={dayClass}>{stock.day}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>

      <VerticalGraph data={data} />
    </>
  );
};

export default Holdings;

import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  import { Line } from "react-chartjs-2"; 
  import { Typography } from "antd";
  
  const LineChart = ({ coinHistory, currentPrice, coinName }: any) => {
    const coinPrice = [];
    const coinTimestamp = [];
  
    if (coinHistory && coinHistory.data && coinHistory.data.history) {
      for (let i = 0; i < coinHistory.data.history.length; i += 1) {
        coinPrice.push(coinHistory.data.history[i].price);
      }
    
      for (let i = 0; i < coinHistory.data.history.length; i += 1) {
        coinTimestamp.push(
          new Date(
            coinHistory.data.history[i].timestamp * 1000
          ).toLocaleDateString()
        );
      }
    }
  
    const data = {
      labels: coinTimestamp.reverse(),
      datasets: [
        {
          label: "Price In USD",
          data: coinPrice.reverse(),
          fill: false,
          backgroundColor: "#0071bd",
          borderColor: "#0071bd",
        },
      ],
    };
  
    ChartJS.register(
      CategoryScale,
      LinearScale,
      PointElement,
      LineElement,
      Title,
      Tooltip,
      Legend
    );
  
    return (
      <>
        <Typography.Title level={2} className="chart-title">
          {coinName} Price Chart{" "}
        </Typography.Title>
  
        <Typography.Title level={5} className="price-change">
          Change: {coinHistory && coinHistory.data ? coinHistory.data.change : ''}%
        </Typography.Title>

        <Typography.Title level={5} className="current-price">
          Current {coinName} Price: $ {currentPrice}
        </Typography.Title>
        
        <Line data={data} />
      </>
    );
  };
  
  export default LineChart;
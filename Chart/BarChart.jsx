import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import { gsap } from "gsap";
import "./BarChart.css";
import StarsCanvas from "../3dEarth/Stars";

const BarChart = () => {
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);
  const [data, setData] = useState([]);
  const [backgroundColor, setBackgroundColor] = useState("rgba(255, 255, 255, 1)");

  useEffect(() => {
    // Generate random data for 3 months (last 90 days)
    const labels = [];
    const generatedData = [];
    let currentDate = new Date();
    currentDate.setDate(currentDate.getDate() - 89); // Start 90 days ago

    for (let i = 0; i < 90; i++) {
      const day = currentDate.getDate();
      const month = currentDate.getMonth() + 1;
      labels.push(`${month}/${day}`);
      generatedData.push(Math.floor(Math.random() * (200 - 100 + 1)) + 100);
      currentDate.setDate(currentDate.getDate() + 1);
    }

    setData(generatedData);

    const ctx = chartRef.current.getContext("2d");

    // Initialize the chart with generated data
    const newChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Page Views",
            data: generatedData, // Set initial data
            backgroundColor: backgroundColor,
            borderColor: "rgba(0, 0, 0, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
        plugins: {
          tooltip: {
            enabled: true,
            callbacks: {
              label: function (context) {
                return `Page Views: ${context.raw}`;
              },
            },
          },
        },
        onClick: (e) => {
          const activePoints = newChart.getElementsAtEventForMode(
            e,
            "nearest",
            { intersect: true },
            false
          );
          if (activePoints.length) {
            const index = activePoints[0].index;
            console.log(`Clicked bar at index: ${index}`);
          }
        },
      },
    });

    setChart(newChart);

    return () => {
      newChart.destroy();
    };
  }, [backgroundColor]);

  // Update background color and data on Desktop button click
  const handleDesktopClick = () => {
    setBackgroundColor("rgba(255, 255, 255, 1)");
    updateChartData();
  };

  // Update background color and data on Mobile button click
  const handleMobileClick = () => {
    setBackgroundColor("rgba(2, 255, 210, 1)");
    updateChartData();
  };

  // Function to update chart data when buttons are clicked
  const updateChartData = () => {
    if (chart) {
      const updatedData = data.map(() => Math.floor(Math.random() * (200 - 100 + 1)) + 100);
      chart.data.datasets[0].data = updatedData;
      chart.data.datasets[0].backgroundColor = backgroundColor;
      chart.update();
    }
  };

  return (
    <div className="relative parent">
      <StarsCanvas />
      <div id="visitorCounts">
        <div id="desktopCount" className="count">
          <button style={{ backgroundColor: "#1c79ce" }} className="glow-btn" onClick={handleDesktopClick}>
            <span>Desktop: 24,828</span>
          </button>
        </div>
        <div id="mobileCount" className="count">
          <button style={{ backgroundColor: "#79d1b3" }} className="glow-btn" onClick={handleMobileClick}>
            <span>Mobile: 25,010</span>
          </button>
        </div>
      </div>
      <div id="chartContainer">
        <canvas ref={chartRef} id="myChart"></canvas>
      </div>
    </div>
  );
};

export default BarChart;

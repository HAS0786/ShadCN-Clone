import React, { useEffect } from "react";
import Chart from "chart.js/auto"; // Import Chart.js library
import "chartjs-adapter-moment"; // Import Chart.js moment adapter for time axes

const Authentication = () => {
  useEffect(() => {
    // Data for the chart
    const chartData = {
      labels: [
        "12-01-2020", "01-01-2021", "02-01-2021",
        "03-01-2021", "04-01-2021", "05-01-2021",
        "06-01-2021", "07-01-2021", "08-01-2021",
        "09-01-2021", "10-01-2021", "11-01-2021",
        "12-01-2021", "01-01-2022", "02-01-2022",
        "03-01-2022", "04-01-2022", "05-01-2022",
        "06-01-2022", "07-01-2022", "08-01-2022",
        "09-01-2022", "10-01-2022", "11-01-2022",
        "12-01-2022", "01-01-2023",
      ],
      datasets: [
        // Indigo line
        {
          label: "Current",
          data: [
            5000, 8700, 7500, 12000, 11000, 9500, 10500,
            10000, 15000, 9000, 10000, 7000, 22000, 7200,
            9800, 9000, 10000, 8000, 15000, 12000, 11000,
            13000, 11000, 15000, 17000, 18000,
          ],
          fill: true,
          backgroundColor: "rgba(59, 130, 246, 0.08)",
          borderColor: "rgb(99, 102, 241)",
          borderWidth: 2,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: "rgb(99, 102, 241)",
        },
        // Gray line
        {
          label: "Previous",
          data: [
            8000, 5000, 6500, 5000, 6500, 12000, 8000,
            9000, 8000, 8000, 12500, 10000, 10000, 12000,
            11000, 16000, 12000, 10000, 10000, 14000, 9000,
            10000, 15000, 12500, 14000, 11000,
          ],
          borderColor: "rgb(203, 213, 225)",
          fill: false,
          borderWidth: 2,
          tension: 0,
          pointRadius: 0,
          pointHoverRadius: 3,
          pointBackgroundColor: "rgb(203, 213, 225)",
        },
      ],
    };

    // Chart.js configuration
    const chartConfig = {
      type: "line",
      data: chartData,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: 20,
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              drawBorder: false,
            },
            ticks: {
              callback: (value) =>
                new Intl.NumberFormat("en-US", {
                  maximumSignificantDigits: 3,
                  notation: "compact",
                }).format(value),
            },
          },
          x: {
            type: "time",
            time: {
              parser: "MM-DD-YYYY",
              unit: "month",
              displayFormats: {
                month: "MMM YY",
              },
            },
            grid: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              autoSkipPadding: 48,
              maxRotation: 0,
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
          tooltip: {
            callbacks: {
              title: () => false, // Disable tooltip title
              label: (context) =>
                new Intl.NumberFormat("en-US", {
                  maximumSignificantDigits: 3,
                  notation: "compact",
                }).format(context.parsed.y),
            },
          },
        },
        interaction: {
          intersect: false,
          mode: "nearest",
        },
      },
    };

    // Create the chart instance
    const ctx = document.getElementById("analytics-card-01");
    if (ctx) {
      new Chart(ctx, chartConfig);
    }

    // Clean up function
    return () => {
      if (ctx) {
        const chartInstance = Chart.getChart(ctx);
        if (chartInstance) {
          chartInstance.destroy();
        }
      }
    };
  }, []); // Run once on component mount

  return (
    <div className="flex flex-col sm:flex-row justify-center items-center antialiased text-gray-600 min-h-screen p-4 sm:p-6 lg:p-8">
      <div className="max-w-3xl mx-auto w-full">
        {/* Chart widget */}
        <div className="bg-white shadow-lg rounded-sm border border-gray-200 h-full">
          <header className="px-5 py-4 border-b border-gray-100 flex items-center">
            <h2 className="font-semibold text-gray-800">Analytics</h2>
          </header>
          <div className="px-5 py-1">
            <div className="flex flex-wrap">
              {/* Stats cards */}
              <div className="flex items-center py-2 w-full sm:w-auto">
                <div className="mr-5">
                  <div className="flex items-center">
                    <div className="text-3xl font-bold text-gray-800 mr-2">
                      24.7K
                    </div>
                    <div className="text-sm font-medium text-green-500">
                      +49%
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">Unique Visitors</div>
                </div>
                <div className="hidden sm:block w-px h-8 bg-gray-200 mr-5"></div>
              </div>
              {/* Repeat for other stats cards */}
            </div>
          </div>
          {/* Chart canvas */}
          <div className="flex-grow">
            <canvas id="analytics-card-01" className="w-full h-72 sm:h-96 lg:h-128"></canvas>
          </div>
        </div>
      </div>
      {/* More components */}
      <div
        className="fixed bottom-0 right-0 w-full md:bottom-8 md:right-12 md:w-auto z-60"
        x-data="{ open: true }"
      >
        <div className="bg-gray-800 text-gray-50 text-sm p-3 md:rounded shadow-lg flex justify-between">
          <div>
            👉{" "}
            <a
              className="hover:underline ml-1"
              href="https://cruip.com/mosaic/?ref=codepen-cruip-analytics"
              target="_blank"
            >
              More components on Cruip.com
            </a>
          </div>
          <button className="text-gray-500 hover:text-gray-400 ml-5">
            <span className="sr-only">Close</span>
            <svg
              className="w-4 h-4 flex-shrink-0 fill-current"
              viewBox="0 0 16 16"
            >
              <path d="M12.72 3.293a1 1 0 00-1.415 0L8.012 6.586 4.72 3.293a1 1 0 00-1.414 1.414L6.598 8l-3.293 3.293a1 1 0 101.414 1.414l3.293-3.293 3.293 3.293a1 1 0 001.414-1.414L9.426 8l3.293-3.293a1 1 0 000-1.414z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Authentication;

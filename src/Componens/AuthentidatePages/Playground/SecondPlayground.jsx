import React, { useEffect } from 'react';
import Chart from 'chart.js/auto'; // Import chart.js (version 3.x or later)

const SecondPlayground = ({theme}) => {
  const chartData = {
    date: 'today',
    options: [
      { label: 'Today', value: 'today' },
      { label: 'Last 7 Days', value: '7days' },
      { label: 'Last 30 Days', value: '30days' },
      { label: 'Last 6 Months', value: '6months' },
      { label: 'This Year', value: 'year' },
    ],
    showDropdown: false,
    selectedOption: 0,
    selectOption: function (index) {
      this.selectedOption = index;
      this.date = this.options[index].value;
      this.renderChart();
    },
    data: null,
    fetch: function () {
      fetch('https://cdn.jsdelivr.net/gh/swindon/fake-api@master/tailwindAlpineJsChartJsEx1.json')
        .then(res => res.json())
        .then(res => {
          this.data = res.dates;
          this.renderChart();
        });
    },
    renderChart: function () {
      // Destroy the existing chart instance if it exists
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      let ctx = document.getElementById('chart');

      this.chartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: this.data[this.date].data.labels,
          datasets: [
            {
              label: "Income",
              backgroundColor: "rgba(102, 126, 234, 0.25)",
              borderColor: "rgba(102, 126, 234, 1)",
              pointBackgroundColor: "rgba(102, 126, 234, 1)",
              data: this.data[this.date].data.income,
            },
            {
              label: "Expenses",
              backgroundColor: "rgba(237, 100, 166, 0.25)",
              borderColor: "rgba(237, 100, 166, 1)",
              pointBackgroundColor: "rgba(237, 100, 166, 1)",
              data: this.data[this.date].data.expenses,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: function (value, index, values) {
                  return value.toLocaleString();
                }
              }
            }
          }
        }
      });
    }
  };

  useEffect(() => {
    chartData.fetch();
    return () => {
      // Cleanup function if needed
      if (chartData.chartInstance) {
        chartData.chartInstance.destroy();
      }
    };
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <div className={`min-w-screen min-h-screen  flex items-center justify-center px-5 py-5  ${theme==="dark"?("bg-gray-900 text-gray-100"):("bg-gray-100 text-gray-900")}`}>
      <div className={`rounded shadow-xl py-5 px-5 w-full lg:w-1/2 ${theme==="dark"?("bg-gray-900 text-gray-100"):("bg-gray-100 text-gray-900")}`}>
        <div className="flex flex-wrap items-end">
          <div className="flex-1">
            <h3 className="text-lg font-semibold leading-tight">Income</h3>
          </div>
          <div className="relative" onClick={() => chartData.showDropdown = false}>
            <button className="text-xs hover:text-gray-300 h-6 focus:outline-none"
                    onClick={() => chartData.showDropdown = !chartData.showDropdown}>
              <span>{chartData.options[chartData.selectedOption].label}</span><i className="ml-1 mdi mdi-chevron-down"></i>
            </button>
            {chartData.showDropdown && (
              <div className="bg-gray-700 shadow-lg rounded text-sm absolute top-auto right-0 min-w-full w-32 z-30 mt-1 -mr-3">
                <span className="absolute top-0 right-0 w-3 h-3 bg-gray-700 transform rotate-45 -mt-1 mr-3"></span>
                <div className="bg-gray-700 rounded w-full relative z-10 py-1">
                  <ul className="list-reset text-xs">
                    {chartData.options.map((item, index) => (
                      <li key={index} className={`px-4 py-2 hover:bg-gray-600 hover:text-white transition-colors duration-100 cursor-pointer ${index === chartData.selectedOption ? 'text-white' : ''}`}
                          onClick={() => { chartData.selectOption(index); chartData.showDropdown = false; }}>
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-wrap items-end mb-5">
          <h4 className="text-2xl lg:text-3xl text-white font-semibold leading-tight inline-block mr-2">
            {'$' + (chartData.data ? chartData.data[chartData.date]?.total.toLocaleString() : '0')}
          </h4>
          <span className={`inline-block ${chartData.data && chartData.data[chartData.date]?.upDown < 0 ? 'text-red-500' : 'text-green-500'}`}>
            <span>{chartData.data && chartData.data[chartData.date]?.upDown < 0 ? '▼' : '▲'}</span>
            <span>{chartData.data ? chartData.data[chartData.date]?.upDown + '%' : '0%'}</span>
          </span>
        </div>
        <div>
          <canvas id="chart" className="w-full"></canvas>
        </div>
      </div>

      <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
        <div>
          <a href="https://www.buymeacoffee.com/scottwindon" target="_blank"
             className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
            <img className="object-cover object-center w-full h-full rounded-full"
                 src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
                 alt="Buy me a beer"/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default SecondPlayground;

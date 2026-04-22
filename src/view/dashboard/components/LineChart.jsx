import React from 'react';
import Chart from 'react-apexcharts';

export const LineChart = ({ theme }) => {
  // ກວດສອບສີຕາມ Theme
  const isDark = theme === "dark";

  const chartConfig = {
    series: [
      {
        name: "Threats",
        data: [250, 280, 230, 310, 290, 400, 320, 350, 420, 380, 280, 200],
      },
    ],
    options: {
      chart: {
        type: "line",
        height: 240,
        toolbar: { show: false },
        fontFamily: 'inherit',
      },
      dataLabels: { enabled: false },
      colors: ["#a855f7"], // ສີເສັ້ນກຣາຟ (Purple-500)
      stroke: {
        lineCap: "round",
        curve: "smooth",
        width: 3,
      },
      markers: { size: 0 },
      xaxis: {
        axisTicks: { show: false },
        axisBorder: { show: false },
        labels: {
          style: {
            colors: isDark ? "#94a3b8" : "#64748b",
            fontSize: "12px",
          },
        },
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      },
      yaxis: {
        labels: {
          style: {
            colors: isDark ? "#94a3b8" : "#64748b",
            fontSize: "12px",
          },
        },
      },
      grid: {
        show: true,
        borderColor: isDark ? "#1e293b" : "#e2e8f0",
        strokeDashArray: 5,
        xaxis: { lines: { show: true } },
        padding: { top: 5, right: 20 },
      },
      tooltip: {
        theme: isDark ? "dark" : "light",
      },
    },
  };

  return (
    <div className={`relative flex flex-col rounded-xl bg-transparent text-gray-700 shadow-none`}>
      <div className="relative flex flex-col gap-4 overflow-hidden rounded-none bg-transparent text-gray-700 shadow-none md:flex-row md:items-center">
        <div className="w-max rounded-lg bg-purple-500 p-3 text-white shadow-lg shadow-purple-500/20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a.515.515 0 00.799-.037l7.375-10.875" />
          </svg>
        </div>
        <div>
          <h6 className={`block font-sans text-base font-semibold leading-relaxed tracking-normal antialiased ${isDark ? 'text-white' : 'text-slate-900'}`}>
            Threat Summary
          </h6>
          <p className={`block max-w-sm font-sans text-sm font-normal leading-normal antialiased ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>
            Visualize security threats over the year.
          </p>
        </div>
      </div>
      
      <div className="pt-6 px-2 pb-0">
        <Chart
          options={chartConfig.options}
          series={chartConfig.series}
          type="line"
          height={240}
        />
      </div>
    </div>
  );
};
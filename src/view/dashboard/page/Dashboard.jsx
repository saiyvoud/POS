import React, { useState } from "react";
import { LineChart} from "../components/LineChart";
const Dashboard = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  // ສີພື້ນຖານຕາມ Theme
  const bgColor = theme === "light" ? "bg-gray-100" : "bg-[#151821]";
  const cardColor =
    theme === "light"
      ? "bg-white shadow-sm border border-gray-200"
      : "bg-slate-900 border border-gray-800";
  const textColor = theme === "light" ? "text-gray-900" : "text-white";
  const subTextColor = theme === "light" ? "text-gray-500" : "text-gray-400";

  return (
    <main
      className={`flex-1 p-8 min-h-screen font-sans transition-colors duration-300 ${bgColor} ${textColor}`}
    >
      <div className="grid grid-cols-12 gap-6">
        {/* Left Column (9 Units) */}
        <div className="col-span-9 space-y-6">
          {/* Current Risk */}
          <section className={`${cardColor} p-6 rounded-2xl`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-medium">Current Risk</h2>
              <select
                className={`${theme === "light" ? "bg-gray-50" : "bg-[#1a1d26]"} text-xs px-2 py-1 rounded border border-gray-700`}
              >
                <option>Daily</option>
              </select>
            </div>
            <div className="grid grid-cols-5 gap-4">
              <RiskCard
                theme={theme}
                icon="🪲"
                color="bg-pink-500"
                value="132%"
                label="Total Threats"
              />
              <RiskCard
                theme={theme}
                icon="🎬"
                color="bg-purple-500"
                value="16%"
                label="Video File Risk"
              />
              <RiskCard
                theme={theme}
                icon="🖼️"
                color="bg-pink-600"
                value="43%"
                label="Image File Risk"
              />
              <RiskCard
                theme={theme}
                icon="☁️"
                color="bg-blue-500"
                value="7%"
                label="Docs File Risk"
              />
              <RiskCard
                theme={theme}
                icon="📂"
                color="bg-cyan-500"
                value="66%"
                label="Folder File Risk"
              />
            </div>
          </section>

          {/* Threat Summary */}
          <section className={`${cardColor} p-6 rounded-2xl`}>
            <LineChart theme={theme} />
          </section>
          {/* Threat Summary 
          <section className={`${cardColor} p-6 rounded-2xl h-72 relative`}>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Threat Summary</h2>
              <span className="text-xs text-purple-500 font-mono">
                June 2024: 29 Threats
              </span>
            </div>
            <div
              className={`w-full h-40 border-b border-l ${theme === "light" ? "border-gray-200" : "border-gray-700"} relative mt-6`}
            >
              <svg
                className="w-full h-full text-purple-500"
                viewBox="0 0 100 20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 15 Q 10 5, 20 12 T 40 8 T 60 14 T 80 10 T 100 15"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </section>
            */}
          {/* Threat Details Table */}
          <section className={`${cardColor} p-6 rounded-2xl`}>
            <h2 className="text-lg font-medium mb-4">Threat Details</h2>
            <table className="w-full text-left text-sm">
              <thead>
                <tr
                  className={`border-b ${theme === "light" ? "border-gray-200" : "border-gray-800"} ${subTextColor} text-[11px] uppercase`}
                >
                  <th className="pb-3">Date</th>
                  <th className="pb-3">Device ID</th>
                  <th className="pb-3">Virus name</th>
                  <th className="pb-3">File Path</th>
                  <th className="pb-3">File Type</th>
                </tr>
              </thead>
              <tbody
                className={`divide-y ${theme === "light" ? "divide-gray-100" : "divide-gray-800"}`}
              >
                <TableRow
                  date="12-05-2024"
                  device="crazyfish228"
                  virus="Code Red"
                  path="C:\Users\oped..."
                  type="Jpeg"
                />
                <TableRow
                  date="11-05-2024"
                  device="angryswan732"
                  virus="Stuxnet"
                  path="\\192.168.10.5\..."
                  type="Zip"
                />
                <TableRow
                  date="12-05-2024"
                  device="crazyfish228"
                  virus="Code Red"
                  path="C:\Users\oped..."
                  type="Jpeg"
                />
                <TableRow
                  date="11-05-2024"
                  device="angryswan732"
                  virus="Stuxnet"
                  path="\\192.168.10.5\..."
                  type="Zip"
                />
              </tbody>
            </table>
          </section>
        </div>

        {/* Right Column (3 Units) */}
        <div className="col-span-3 space-y-6">
          {/* Risk Score */}
          <div
            className={`${cardColor} p-6 rounded-2xl flex flex-col items-center`}
          >
            <h2 className="w-full text-left text-lg font-medium mb-6">
              Risk Score
            </h2>
            <div className="relative w-32 h-32 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="50"
                  stroke={theme === "light" ? "#f3f4f6" : "#1f2937"}
                  strokeWidth="10"
                  fill="transparent"
                />
                <circle
                  cx="64"
                  cy="64"
                  r="50"
                  stroke="#f97316"
                  strokeWidth="10"
                  fill="transparent"
                  strokeDasharray="314"
                  strokeDashoffset="80"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute text-center">
                <span className="text-2xl font-bold">741</span>
                <p className="text-[10px] text-orange-500 font-bold uppercase">
                  High
                </p>
              </div>
            </div>
          </div>

          {/* NEW: Threats By Virus */}
          <div className={`${cardColor} p-6 rounded-2xl`}>
            <h2 className="text-lg font-medium mb-4">Threats By Virus</h2>
            <div className="flex justify-center mb-6">
              <div className="relative w-28 h-28 flex items-center justify-center">
                {/* Donut Chart Simulation */}
                <div className="absolute inset-0 rounded-full border-[10px] border-blue-500 border-t-purple-500 border-r-pink-500"></div>
                <div className="text-center z-10">
                  <p className={`text-[10px] ${subTextColor}`}>Total</p>
                  <p className="text-lg font-bold">65%</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <LegendItem
                color="bg-purple-500"
                label="ILOVEYOU"
                theme={theme}
              />
              <LegendItem color="bg-pink-500" label="Melissa" theme={theme} />
              <LegendItem color="bg-blue-500" label="MyDoom" theme={theme} />
              <LegendItem color="bg-cyan-500" label="Sasser" theme={theme} />
            </div>
          </div>

          {/* NEW: Threat by device */}
          <div className={`${cardColor} p-6 rounded-2xl`}>
            <h2 className="text-lg font-medium mb-4">Threat by device</h2>
            <div className="space-y-4">
              <DeviceItem
                id="crazyfish228"
                percent="40%"
                color="border-orange-500"
                theme={theme}
              />
              <DeviceItem
                id="angryswan732"
                percent="12%"
                color="border-yellow-500"
                theme={theme}
              />
              <DeviceItem
                id="crazyfish228"
                percent="12%"
                color="border-yellow-500"
                theme={theme}
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

// --- Sub Components ---

const RiskCard = ({ icon, color, value, label, theme }) => (
  <div
    className={`${theme === "light" ? "bg-gray-50" : "bg-[#1a1d26]"} p-4 rounded-xl flex flex-col items-center text-center`}
  >
    <div className={`${color} p-2 rounded-lg mb-2 text-white text-sm`}>
      {icon}
    </div>
    <div className="text-lg font-bold">{value}</div>
    <div className="text-[9px] text-gray-500 uppercase tracking-tighter">
      {label}
    </div>
  </div>
);

const TableRow = ({ date, device, virus, path, type }) => (
  <tr className="hover:bg-white/5">
    <td className="py-4 text-[11px]">{date}</td>
    <td className="py-4 text-[11px] font-medium">{device}</td>
    <td className="py-4 text-[11px] text-red-400">{virus}</td>
    <td className="py-4 text-[11px] opacity-60 font-mono">{path}</td>
    <td className="py-4 text-[11px]">{type}</td>
  </tr>
);

const LegendItem = ({ color, label, theme }) => (
  <div className="flex items-center justify-between text-[11px]">
    <div className="flex items-center gap-2">
      <span className={`w-2 h-2 rounded-full ${color}`}></span>
      <span className={theme === "light" ? "text-gray-600" : "text-gray-400"}>
        {label}
      </span>
    </div>
  </div>
);

const DeviceItem = ({ id, percent, color, theme }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-3">
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center ${theme === "light" ? "bg-gray-100" : "bg-[#1a1d26]"}`}
      >
        🖥️
      </div>
      <div>
        <p className="text-[10px] text-gray-500">Device ID</p>
        <p className="text-xs font-medium">{id}</p>
      </div>
    </div>
    <div
      className={`w-8 h-8 rounded-full border-2 ${color} flex items-center justify-center text-[8px] font-bold`}
    >
      {percent}
    </div>
  </div>
);

export default Dashboard;

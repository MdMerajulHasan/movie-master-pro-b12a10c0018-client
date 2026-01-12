import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";

// optional fixed colors for slices
const COLORS = [
  "#38bdf8", // sky color to use in pie
  "#34d399", // green color to use in pie
  "#f472b6", // pink color to use in pie
  "#facc15", // yellow color to use in pie
  "#a78bfa", // violet color to use in pie
];

const renderLabel = ({ name, percent }) => {
  return `${name} ${(percent * 100).toFixed(0)}%`;
};

const GenrePieChart = ({ data }) => {
  return (
    <div className="w-full mt-0 h-64 bg-base-200 dark:bg-slate-800 rounded-md shadow p-4">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="genre"
            outerRadius={80}
            label={renderLabel}
            labelLine={false}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]} //pie colors setting by index
              />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              backgroundColor: "#1e293b", //hex of slate-800 color to use in tooltip
              border: "none",
              color: "#fff", //tooltip text color
            }}
            itemStyle={{ color: "#fff" }}
            cursor={{ fill: "rgba(255,255,255,0.05)" }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GenrePieChart;

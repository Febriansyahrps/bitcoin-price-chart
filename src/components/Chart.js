import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useContext } from "react";
import DataContext from "../DataContext";
import { unixToDate } from "./util";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = () => {
  // use context
  const { data } = useContext(DataContext);
  const { bitcoinData } = data;

  // chart data
  const chartData = {
    labels: bitcoinData.values.map((state) => unixToDate(state[0])),
    datasets: [
      {
        label: `Price in $ USD`,
        data: bitcoinData.values.map((state) => state[1].toFixed(2)),
        backgroundColor: "#004888",
        borderColor: "#004888",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <Line
        data={chartData}
        options={{
          responsive: true,
          scales: {
            x: {
              display: false,
            },
          },
          plugins: {
            title: {
              display: true,
              text: "Bitcoin opening price in the last month",
              font: {
                size: 16,
              },
            },
            legend: {
              display: true,
            },
          },
        }}
      />
    </div>
  );
};

export default Chart;

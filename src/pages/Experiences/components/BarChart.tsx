import { useCallback, useEffect, useRef } from "react";
import Styles from "../styles/Styles";
import { Chart, ChartData } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Fonts } from "config";
import colors from "config/colors";

Chart.register(ChartDataLabels);
Chart.defaults.font.family = Fonts.medium;

interface Props {
  chartData: { name: string; value: number; color: string }[];
  chartTitle: string;
}

const formatData = (
  data: { name: string; value: number; color: string }[]
): ChartData => {
  return {
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.value),
        borderWidth: 1,
        borderColor: data.map((item) => item.color),
        backgroundColor: data.map((item) => item.color),
      },
    ],
  };
};

function BarChart({ chartData, chartTitle }: Props) {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data = formatData(chartData);
      chartRef.current.update();
    }
  }, [chartData]);

  const canvasCallback = useCallback(
    (canvas: HTMLCanvasElement | null) => {
      const ctx = canvas?.getContext("2d");
      if (!canvas || !ctx) return;

      // Destroi o gráfico existente, se houver
      if (chartRef.current) {
        chartRef.current.destroy();
      }

      // Cria um novo gráfico
      chartRef.current = new Chart(ctx, {
        type: "bar",
        data: formatData(chartData),
        options: {
          responsive: true,
          maintainAspectRatio: false,
          indexAxis: "y",
          scales: {
            x: {
              ticks: {
                display: false, // Remove os números do eixo x
              },
            },
            y: {
              ticks: {
                display: false, // Remove os rótulos do eixo y
              },
            },
          },
          layout: {
            padding: {
              top: 5,
              bottom: 0,
              left: 20,
              right: 20,
            },
          },
          plugins: {
            title: {
              display: true,
              align: "center",
              text: chartTitle,
              color: colors.white,
              padding: 15,
              font: {
                size: 15,
                weight: "bold",
                lineHeight: 1.2,
              },
            },
            legend: {
              display: false,
            },
            tooltip: {
              callbacks: {
                label: function (context) {
                  const value = context.raw; // Acessa o value dos dados(chartData) diretamente
                  return `${value}%`;
                },
              },
            },
            datalabels: {
              formatter: (value, context) => {
                const index = context.dataIndex;
                const label = chartData[index].name; // Usa o label do dos dados(chartData)
                return `${label}: ${value}%`;
              },
              anchor: "center",
              align: "center",
              clamp: true,
              labels: {
                value: {
                  font: {
                    weight: "bold",
                    size: 15,
                  },
                  color: colors.white,
                },
              },
            },
          },
        },
      });
    },
    [chartData, chartTitle]
  );

  return (
    <Styles.ChartBox>
      <canvas ref={canvasCallback}></canvas>
    </Styles.ChartBox>
  );
}

export default BarChart;

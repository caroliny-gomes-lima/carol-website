import { useEffect, useRef } from "react";
import Styles from "../Styles/Styles";
import { Chart, ChartData } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Fonts } from "config";
import colors from "config/colors";

Chart.register(ChartDataLabels);
Chart.defaults.font.family = Fonts.medium;

interface Props {
  chartData: { name: string; value: number }[];
  chartTitle: string,
}

function RadarChart({ chartData, chartTitle }: Props) {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data = formatData(chartData);
      chartRef.current.update();
    }
  }, [chartData]);

  const formatData = (data: { name: string; value: number }[]): ChartData => ({
    labels: data.map((item) => item.name),
    datasets: [
      {
        data: data.map((item) => item.value),
        pointBackgroundColor: colors.yellow,
        pointBorderColor: colors.yellow,
        borderWidth: 1,
        borderColor: colors.purple,
        backgroundColor: `${colors.purple}30`,
      },
    ],
  });

  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    chartRef.current?.destroy();
    if (ctx) {
      chartRef.current = new Chart(ctx, {
        type: "radar",
        data: formatData(chartData),
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            r: {
              angleLines: {
                color: `${colors.yellow}30`,
              },
              grid: {
                color: `${colors.white}10`,
              },
              pointLabels: {
                color: colors.purple,
                padding: 37,
                font: {
                  weight: "bold",
                  size: 11,
                }
              },
              ticks: {
                display: false,
              },
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
              }
            },
            legend: {
              display: false,
            },
            datalabels: {
              anchor: "end",
              align: "end",
              clamp: true,
              labels: {
                value: {
                  font: {
                    weight: "bold",
                    size: 15,
                  },
                  color: colors.yellow,
                },
              },
            },
          },
        },
      });
    }
  };

  return (
    <Styles.ChartBox>
      <canvas ref={canvasCallback}></canvas>
    </Styles.ChartBox>
  );
};

export default RadarChart;

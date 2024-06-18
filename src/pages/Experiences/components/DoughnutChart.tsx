import React, { useEffect, useRef } from "react";
import Styles from "../styles/Styles";
import { Chart, ChartData } from "chart.js/auto";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { fonts } from "config";
import colors from "config/colors";

Chart.register(ChartDataLabels);
Chart.defaults.font.family = fonts.medium;

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

function RadarChart({ chartData, chartTitle }: Props) {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.data = formatData(chartData);
      chartRef.current.update();
    }
  }, [chartData, formatData]);

  const canvasCallback = (canvas: HTMLCanvasElement | null) => {
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    // Destroi o gráfico existente, se houver
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    chartRef.current = new Chart(ctx, {
      type: "doughnut",
      data: formatData(chartData),
      options: {
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 10,
            bottom: 5,
            left: 1,
            right: 1,
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
            align: "center",
            position: "bottom",
            labels: {
              usePointStyle: true,
              boxHeight: 7,
              color: colors.white,
              font: {
                size: 12,
                weight: "bold",
                lineHeight: 1.2,
              },
            },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const value = context.raw;
                return `${value}%`;
              },
            },
          },
          datalabels: {
            formatter: (value) => {
              return value + "%";
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
  };

  return (
    <Styles.ChartBox>
      <canvas ref={canvasCallback}></canvas>
    </Styles.ChartBox>
  );
}

export default RadarChart;

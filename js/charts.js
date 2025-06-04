window.addEventListener("load", () => {
  const commonChartOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Pontos",
        },
      },
      y: {
        ticks: {
          autoSkip: false,
          font: {
            size: 10,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top",
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";
            if (label) {
              label += ": ";
            }
            if (context.parsed.x !== null) {
              label += parseFloat(context.parsed.x.toFixed(1)) + " pontos";
            }
            return label;
          },
        },
      },
    },
  };

  const ctxP1 = document.getElementById("examTopicsChartP1");
  if (ctxP1) {
    new Chart(ctxP1, {
      type: "bar",
      data: {
        labels: [
          "Proposições/Conectivos",
          "Tabelas Verdade/Negações",
          "Tautologias/Contradições",
          "Equivalências Lógicas",
          "Implicação/Inferência Lógica",
          "Sentenças Abertas/Quantif.",
        ],
        datasets: [
          {
            label: "Pontos Estimados na P1",
            data: [2.0, 2.0, 1.5, 2.0, 1.5, 1.0],
            backgroundColor: "rgba(54, 162, 235, 0.7)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: commonChartOptions,
    });
  }

  // Gráfico para P2
  const ctxP2 = document.getElementById("examTopicsChartP2");
  if (ctxP2) {
    new Chart(ctxP2, {
      type: "bar",
      data: {
        labels: [
          "Contagem (Combinatória)",
          "Teoria dos Conjuntos",
          "Funções",
          "Relações",
          "Indução Matemática",
        ],
        datasets: [
          {
            label: "Pontos Estimados na P2",
            data: [3.9, 1.5, 1.8, 1.8, 1.0],
            backgroundColor: "rgba(75, 192, 192, 0.7)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: commonChartOptions,
    });
  }
});
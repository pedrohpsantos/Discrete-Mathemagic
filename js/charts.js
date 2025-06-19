window.addEventListener("load", () => {
  const commonBarChartOptions = {
    indexAxis: "y",
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Pontos (Estimativa)",
        },
      },
      y: {
        ticks: {
          autoSkip: false,
          font: {
            size: 11,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      title: {
          display: true,
          font: {
              size: 14,
          }
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

  // Gráfico para P1
  const ctxP1 = document.getElementById("examTopicsChartP1");
  if (ctxP1) {
    const p1Options = JSON.parse(JSON.stringify(commonBarChartOptions));
    p1Options.plugins.title.text = 'Distribuição de Tópicos - P1';
    new Chart(ctxP1, {
      type: "bar",
      data: {
        labels: [
          "Equivalências/Inferência",
          "Tabelas Verdade/Negações",
          "Quantificadores/Tradução",
          "Tautologias/Contradições",
        ],
        datasets: [
          {
            label: "Pontos P1",
            data: [3.5, 2.5, 2.0, 2.0],
            backgroundColor: "rgba(54, 162, 235, 0.7)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: p1Options,
    });
  }

  // Gráfico para P2
  const ctxP2 = document.getElementById("examTopicsChartP2");
  if (ctxP2) {
    const p2Options = JSON.parse(JSON.stringify(commonBarChartOptions));
    p2Options.plugins.title.text = 'Distribuição de Tópicos - P2';
    new Chart(ctxP2, {
      type: "bar",
      data: {
        labels: [
          "Contagem (P/A/C)",
          "Conjuntos (Inclusão-Exclusão)",
          "Funções (Injetora, etc.)",
          "Relações (Propriedades)",
          "Indução Matemática",
        ],
        datasets: [
          {
            label: "Pontos P2",
            data: [3.0, 2.0, 2.0, 2.0, 1.0],
            backgroundColor: "rgba(75, 192, 192, 0.7)",
            borderColor: "rgba(75, 192, 192, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: p2Options,
    });
  }

  // Gráfico para P3
  const ctxP3 = document.getElementById("examTopicsChartP3");
  if (ctxP3) {
    const p3Options = JSON.parse(JSON.stringify(commonBarChartOptions));
    p3Options.plugins.title.text = 'Distribuição de Tópicos - P3';
    new Chart(ctxP3, {
      type: "bar",
      data: {
        labels: [
          "Relações de Recorrência",
          "Funções Geradoras",
          "Combinatória (Sol. Inteiras)",
        ],
        datasets: [
          {
            label: "Pontos P3",
            data: [4.0, 4.0, 2.0], 
            backgroundColor: "rgba(255, 159, 64, 0.7)",
            borderColor: "rgba(255, 159, 64, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: p3Options,
    });
  }
});

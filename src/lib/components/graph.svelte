<script>
    import Chart from 'chart.js/auto';
    import annotationPlugin from 'chartjs-plugin-annotation'; // Import the plugin
    import { onMount } from 'svelte';
  
    Chart.register(annotationPlugin); // Register the annotation plugin
  
    let chart;
  
    onMount(() => {
      const canvas = document.getElementById('myChart');
      if (!canvas) {
        console.error('Canvas element with ID "myChart" not found!');
        return;
      }
  
      const ctx = canvas.getContext('2d');
  
      const xValues = [
        "January", "February", "March", "April", "May",
        "June", "July", "August", "September", "November", "December"
      ];
      const yValues = [150, 260, 130, 100, 210, 240, 260, 140, 220, 205, 230];
      const average = 150;
  
      // Dynamically set bar colors based on whether the value is above or below the average
      const barColors = yValues.map(value => (value > average ? "red" : "green"));
  
      chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: xValues,
          datasets: [
            {
              backgroundColor: barColors, // Use the dynamic colors
              data: yValues,
            },
          ],
        },
        options: {
          plugins: {
            legend: { display: false },
            title: {
              display: true,
              text: 'Monthly CO2 Emissions',
            },
            annotation: {
              annotations: {
                averageLine: {
                  type: 'line',
                  yMin: average,
                  yMax: average,
                  borderColor: 'red',
                  borderWidth: 2,
                  label: {
                    content: `Average (${average})`,
                    enabled: true,
                    position: 'end',
                    backgroundColor: 'red',
                    color: 'white',
                    font: { size: 12 },
                  },
                },
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              max: 400,
              ticks: {
                stepSize: 0.5,
              },
            },
          },
        },
      });
  
      return () => {
        if (chart) chart.destroy();
      };
    });
  </script>
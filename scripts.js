document.addEventListener('DOMContentLoaded', function() {
    // Category Chart
    const categoryData = {
        labels: ['Materiales', 'Albañilería (Lalo)', 'Albañilería (Hugo)', 'Herrería', 'Arquitectura', 'Albañilería (otros)', 'Electricidad', 'Plomería', 'Otros'],
        datasets: [{
            label: 'Gastos por Categoría (ARS)',
            data: [38704986, 16852000, 14680000, 8324000, 7510640, 5581538, 3560000, 3372000, 8914836],
            backgroundColor: [
                '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b',
                '#6f42c1', '#fd7e14', '#20c9a6', '#858796'
            ],
            borderWidth: 1
        }]
    };

    new Chart(
        document.getElementById('categoryChart'),
        {
            type: 'bar',
            data: categoryData,
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return 'ARS ' + context.raw.toLocaleString('es-AR');
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            callback: function(value) {
                                if (value >= 1000000) {
                                    return '$' + (value / 1000000).toFixed(1) + 'M';
                                }
                                return '$' + value.toLocaleString('es-AR');
                            }
                        }
                    }
                }
            }
        }
    );

    // Timeline Chart
    const timelineData = {
        labels: ['2022', '2023', '2024-S1', '2024-S2', '2025-Q1'],
        datasets: [{
            label: 'Gastos por Período (ARS)',
            data: [12500000, 25000000, 20000000, 20000000, 30000000],
            backgroundColor: [
                '#4e73df', '#1cc88a', '#36b9cc', '#f6c23e', '#e74a3b'
            ],
            borderWidth: 1
        }]
    };

    new Chart(
        document.getElementById('timelineChart'),
        {
            type: 'pie',
            data: timelineData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let value = context.raw;
                                let percentage = Math.round((value / 107500000) * 100);
                                return 'ARS ' + value.toLocaleString('es-AR') + ' (' + percentage + '%)';
                            }
                        }
                    }
                }
            }
        }
    );

    // Dollar Chart
    const dollarData = {
        labels: ['2022', '2023', '2024-S1', '2024-S2', '2025-Q1'],
        datasets: [
            {
                type: 'line',
                label: 'Tipo Cambio Oficial',
                data: [130, 270, 850, 980, 1150],
                borderColor: '#4e73df',
                backgroundColor: 'rgba(78, 115, 223, 0.1)',
                yAxisID: 'y',
                tension: 0.1
            },
            {
                type: 'line',
                label: 'Tipo Cambio Blue',
                data: [240, 500, 1100, 1250, 1350],
                borderColor: '#1cc88a',
                backgroundColor: 'rgba(28, 200, 138, 0.1)',
                yAxisID: 'y',
                tension: 0.1
            },
            {
                type: 'bar',
                label: 'USD Oficial',
                data: [96154, 92593, 23529, 20408, 26087],
                backgroundColor: 'rgba(246, 194, 62, 0.7)',
                yAxisID: 'y1'
            },
            {
                type: 'bar',
                label: 'USD Blue',
                data: [52083, 50000, 18182, 16000, 22222],
                backgroundColor: 'rgba(231, 74, 59, 0.7)',
                yAxisID: 'y1'
            }
        ]
    };

    new Chart(
        document.getElementById('dollarChart'),
        {
            type: 'bar',
            data: dollarData,
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                stacked: false,
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        title: {
                            display: true,
                            text: 'Tipo de Cambio (ARS/USD)'
                        },
                        grid: {
                            drawOnChartArea: false
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        title: {
                            display: true,
                            text: 'Valor en USD'
                        },
                        grid: {
                            drawOnChartArea: false
                        }
                    }
                }
            }
        }
    );
});

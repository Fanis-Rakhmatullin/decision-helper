<template>
  <div class="chart-component">
    <canvas
      ref="chart"
    ></canvas>
  </div>
</template>

<script>

import Chart from 'chart.js';

export default {
  name: 'ChartComponent',
  props: {
    chartValues: Array,
    chartLabels: Array,
    chartTitle: {
      type: String,
      default() {
        return '';
      },
    },
    colorScheme: {
      type: Array,
      default() {
        return [
          '#e4572e', '#29335c', '#f3a712', '#a8c686', '#669bbc',
          '#214e34', '#1e152a', '#e9b44c', '#9b2915', '#50a2a7',
          '#6b2d5c', '#f0386b', '#f4ff52', '#f4dbd8', '#7d98a1',
          '#83b692', '#f9ada0', '#f9627d', '#c65b7c', '#5b3758',
        ];
      },
    },
  },
  mounted() {
    const data = {
      datasets: [{
        data: this.chartValues,
        backgroundColor: this.colorScheme,
      }],
      labels: this.chartLabels,
    };
    const ctx = this.$refs.chart;
    // eslint-disable-next-line no-unused-vars
    const myPieChart = new Chart(ctx, {
      type: 'pie',
      data,
      options: {
        maintainAspectRatio: false,
        responsive: true,
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: this.chartTitle,
        },
      },
    });
  },
};
</script>

<style lang="scss" scoped>
#myChart {
}
</style>

<!--[-->
<!--'#e4572e', '#29335c', '#f3a712', '#a8c686', '#669bbc',-->
<!--'#214e34', '#1e152a', '#e9b44c', '#9b2915', '#50a2a7',-->
<!--'#6b2d5c', '#f0386b', '#f4ff52', '#f4dbd8', '#7d98a1',-->
<!--'#83b692', '#f9ada0', '#f9627d', '#c65b7c', '#5b3758',-->
<!--]-->

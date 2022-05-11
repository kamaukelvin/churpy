<template>
  <svg class="line-chart" id="test" :viewBox="viewBox">
    <g transform="translate(0, 10)">
      <path class="line-chart__line" :d="line" fill="red"/>
      <path class="line-chart__line2" :d="line2" />
    </g>
  </svg>
</template>

<script>
import * as d3 from "d3";

export default {
  name: "LineChart",
  props: {
    data: {
      required: true,
      type: Array,
    },
    width: {
      default: 500,
      type: Number,
    },
    height: {
      default: 200,
      type: Number,
    },
  },
  data() {
    return {
      padding: 60,
    };
  },
  computed: {
    rangeX() {
      const width = this.width - this.padding;
      return [0, width];
    },
    rangeY() {
      const height = this.height - this.padding;
      return [0, height];
    },
    path() {
      const x = d3.scaleLinear().range(this.rangeX);
      const y = d3.scaleLinear().range(this.rangeY);
      d3.axisLeft().scale(x);
      d3.axisTop().scale(y);
      x.domain(
        d3.extent(this.data, (d, i) => {
          return i;
        })
      );
      y.domain([
        0,
        d3.max(this.data, (d) => {
          return d.series1;
        }),
      ]);
      return d3
        .line()
        .x((d, i) => x(i))
        .y((d) => {
          return y(d.series1);
        });
    },
    path2() {
    
      const x = d3.scaleLinear().range(this.rangeX);
      const y = d3.scaleLinear().range(this.rangeY);
     
      
      d3.axisTop().scale(y);
      x.domain(
        d3.extent(this.data, (d, i) => {
          return i;
        })
      );
      y.domain([
        0,
        d3.max(this.data, (d) => {
          return d.series2;
        }),
      ]);
      return d3
        .line()
        .x((d, i) => x(i))
        .y((d) => {
          return y(d.series2);
        });
    },
    line() {
      return this.path(this.data);
    },
    line2() {
      return this.path2(this.data);
    },

    viewBox() {
      return `0 0 ${this.width} ${this.height}`;
    },
  },
};
</script>

<style scoped>
.line-chart {
  margin: 0 8rem;
}
.line-chart__line {
  fill: none;
  stroke: #76bf8a;
  stroke-width: 1px;
}
.line-chart__line2 {
  fill: none;
  stroke: blue;
  stroke-width: 1px;
}
</style>

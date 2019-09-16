import React, { Component } from 'react'
import Chart from "react-apexcharts";





export default class ColumnChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: []
    };
  }


  componentWillReceiveProps(nextProps) {
    if (nextProps.productData !== this.props.productData) {
      let {productData} = nextProps,
          xaxisData = [],
          seriesData = []


      productData.forEach(elm => {
        xaxisData.push(elm.date)
        seriesData.push(elm.inventory_level)
      });


      this.setState({
        options: {
          xaxis: {
            categories: xaxisData
          }
        },
        series: [
          {
            name: "Inventory level",
            data: seriesData
          }
        ]
      });
    }
  }



  render() {
    const {options, series} = this.state

    return (
      <div className="cont-width_0">
        <div className="column-chart">
          <Chart
            options={options}
            series={series}
            type="bar"
            width="800"
          />
        </div>
      </div>
    )
  }
}

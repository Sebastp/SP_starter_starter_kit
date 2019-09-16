import React, { Component, Fragment } from 'react'
import Dropdown from 'react-dropdown'

import Chart from "react-apexcharts";

import Topbar from './Topbar'
import Table from './Table'
import ColumnChart from './ColumnChart'


var axios = require('axios');


export default class Landing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currProductId: 1,
      productsData: [],
      dropdownArr: []
    };
  }

  componentDidMount(){
    axios.post('/getdata').then(res=>{
      let dropdownArr = (res.data).map(a=>{
        return {value: a.product_id, label: a.product_name}
      })
      console.log(res.data);
      dropdownArr = dropdownArr.reduce((acc, current) => {
        const x = acc.find(item => item.label === current.label);
        if (!x) {
          return acc.concat([current]);
        } else {
          return acc;
        }
      }, [])


      this.setState({
        productsData: res.data,
        dropdownArr
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  productChange = (e)=>{
    this.setState({
      currProductId: parseInt(e.value)
    })
  }



  render() {
    const {currProductId, productsData, dropdownArr} = this.state
    var currProductData = productsData.filter(a=> a.product_id == currProductId)

    return (
      <Fragment>
        <Topbar/>
        <header className="cont-width_0">
          <h2>Inventory level visualization</h2>
        </header>

        <div className="product-dropdown">
          <Dropdown options={dropdownArr} value={dropdownArr[0]} placeholder="Month"
            onChange={this.productChange}
            arrowClosed={<img src={require("../assets/img/arrow-down.svg")} alt="arrow"/>}
            arrowOpen={<img src={require("../assets/img/arrow-up.svg")} alt="arrow"/>}
          />
        </div>

        <ColumnChart productData={currProductData}/>

        <Table productData={currProductData}/>

      </Fragment>
    )
  }
}

import React from 'react'


const columns = [
  {
    name: 'Id',
    selector: 'product_id',
    sortable: true
  },
  {
    name: 'Product',
    selector: 'product_name',
    sortable: true
  },
  {
    name: 'Inventory Level',
    selector: 'inventory_level',
    sortable: true
  },
  {
    name: 'Date',
    selector: 'date',
    sortable: true
  },
];

const Table = (props) => {
  const {productData} = props
  
  return (
    <div className="datatable">
      <div className="row datatable-topLabels">
        <div className="col-3">
          Product ID
        </div>
        <div className="col-3">
          Product Name
        </div>
        <div className="col-3">
          Inventory Level
        </div>
        <div className="col-3">
          Date
        </div>
      </div>

      <hr/>

      {
        productData.map((elem) => (
          <div className="row datatable-contentRow">
            <div className="col-3">
              {elem.product_id}
            </div>
            <div className="col-3">
              {elem.product_name}
            </div>
            <div className="col-3">
              {elem.inventory_level}
            </div>
            <div className="col-3">
              {elem.date}
            </div>
          </div>
        ))
      }
    </div>
  )
}



export default Table

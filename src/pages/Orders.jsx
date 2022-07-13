import React from 'react';
import { ordersData, ordersGrid } from '../data/dummy';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Resize,
  Sort,
  ContextMenu,
  Filter,
  Page,
  ExcelExport,
  PdfExport,
  Edit,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { Header } from '../components';
const Orders = () => {
  return (
    <div className="m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl">
      <Header category="page" title="Orders" />
      <GridComponent
        id="gribcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item) => (
            <ColumnDirective {...item}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject
          services={[
            Resize,
            Sort,
            ContextMenu,
            Filter,
            Page,
            ExcelExport,
            Edit,
            PdfExport,
          ]}
        />
      </GridComponent>
    </div>
  );
};

export default Orders;

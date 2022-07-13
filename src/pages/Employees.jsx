import React from 'react';
import { employeesData, employeesGrid } from '../data/dummy';
import {
  GridComponent,
  ColumnsDirective,
  ColumnDirective,
  Page,
  Search,
  Toolbar,
  Inject,
} from '@syncfusion/ej2-react-grids';
import { Header } from '../components';

const Employees = () => {
  return (
    <div className="m-2 p-2 md:m-10 md:p-10 bg-white rounded-3xl">
      <Header category="page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      >
        <ColumnsDirective>
          {employeesGrid.map((item) => (
            <ColumnDirective {...item}></ColumnDirective>
          ))}
        </ColumnsDirective>
        <Inject services={[Search, Page, Toolbar]} />
      </GridComponent>
    </div>
  );
};

export default Employees;

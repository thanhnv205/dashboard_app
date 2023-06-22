import React from 'react';

import {
  ColumnDirective,
  ColumnsDirective,
  Inject,
  ContextMenu,
  Edit,
  ExcelExport,
  Filter,
  GridComponent,
  Page,
  PdfExport,
  Resize,
  Sort
} from '@syncfusion/ej2-react-grids';

import { Header } from '../components';
import { ordersData, ordersGrid } from '../data/dummy';

function Orders() {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-xl'>
      <Header category='Page' title='Orders' />

      <GridComponent
        id='gridcomp'
        dataSource={ordersData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective>
          {ordersGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>

        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders
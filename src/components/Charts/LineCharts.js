import { ChartComponent, DateTime, Inject, Legend, LineSeries, SeriesCollectionDirective, SeriesDirective, Tooltip } from '@syncfusion/ej2-react-charts'
import React from 'react'
import { LinePrimaryXAxis, LinePrimaryYAxis, lineCustomSeries } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

function LineCharts() {

  const { currentMode } = useStateContext()

  return (
    <div>
      <ChartComponent
        id='line-chart'
        height='420px'
        primaryXAxis={LinePrimaryXAxis}
        primaryYAxis={LinePrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
      >
        <Inject services={[LineSeries, DateTime, Legend, Tooltip]} />

        <SeriesCollectionDirective>
          {lineCustomSeries.map((item, index) => (
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default LineCharts
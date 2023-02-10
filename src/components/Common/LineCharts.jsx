import { React, useEffect } from 'react'
import PropTypes from 'prop-types'

import * as echarts from 'echarts/core'
import {
  BarChart,
  LineChart,
} from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  GridComponent,
  // Dataset
  DatasetComponent,
  // Built-in transform (filter, sort)
  TransformComponent,
} from 'echarts/components'
import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
])

function LineCharts({pointList=[], className=''}) {
  useEffect(() => {
    const mychart = echarts.init(document.getElementById('echart'))
    console.log(pointList)
    mychart.setOption({
      xAxis: {
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {},
      series: [
        {
          type: 'bar',
          data: [23, 24, 18, 25, 27, 28, 25],
        },
      ],
    })
  }, [])
  
  return (
    <div>
      <div id='echart' className={`flex flex-row items-center w-full ${className}`}></div>
    </div>
  )
}
LineCharts.propTypes = {
  pointList: PropTypes.array,
  className: PropTypes.string,
}
export default LineCharts
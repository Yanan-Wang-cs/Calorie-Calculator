import { React, useEffect } from 'react'
import PropTypes from 'prop-types'
import { padStart } from 'lodash'
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
    const values = pointList.reduce((arr, item) => {
      arr.push(item[1])
      return arr
    }, [])
    console.log(values)
    
    function timestampToTime(timestamp) {
      let date = new Date(timestamp)
      let Y = date.getFullYear()
      let M = padStart(date.getMonth()+1, 2, '0')
      let D = padStart(date.getDate(), 2, '0')
      console.log(`${Y}-${M}-${D}`)
      return `${Y}-${M}-${D}`
    }
    mychart.setOption({
      xAxis: {
        type: 'value',
        min: Math.max(Date.parse(new Date()) - 24*60*60*1000*30, Math.min(pointList[0][0], Date.parse(new Date()) - 24*60*60*1000)),
        max: Date.parse(new Date()),
        axisLabel: {
          formatter: function(e) {
            return timestampToTime(e)
          },
          rotate: 30,
        },
      },
      yAxis: {
        type: 'value',
        min: Math.min(values)-1,
        max: Math.max(values)+1,
        axisLabel: {
          formatter: function(e) {
            return e
          },
        },
      },
      series: [
        {
          type: 'line',
          data: pointList,
          smooth: true,
        },
      ],
    })
  }, [])
  
  return (
    <div className='flex flex-col justify-center items-center w-full'>
      <div id='echart' className={className}></div>
    </div>
  )
}
LineCharts.propTypes = {
  pointList: PropTypes.array,
  className: PropTypes.string,
}
export default LineCharts
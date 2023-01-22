import React from 'react'
export default function (componentFactory) {
  class AsyncComponent extends React.Component {
    constructor() {
      super()
      this.state = {component: null}
    }
    async componentDidMount() {
      console.log('???')
      let {default: component} = await componentFactory()
      this.setState({component})
    }
    render() {

      let Comp = this.state.component
      console.log('???', Comp)
      return Comp ? <Comp {...this.props} /> : null
    }
  }
  return AsyncComponent
}
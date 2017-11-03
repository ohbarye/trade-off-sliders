import React, { Component } from 'react'
import SliderList from './components/SliderList'
import InputArea from './components/InputArea'
import { AppBar, Paper } from 'material-ui';

class App extends Component {
  state = {
    items: []
  }

  handleSubmit = (newItem) => {
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
    }))
  }

  handleSliderDestroy = (id) => {
    const newItems = this.state.items.filter(item => item.id !== id)
    this.setState(prevState => ({ items: newItems }))
  }

  render() {
    return (
      <Paper>
        <AppBar title="Trade Off Slider" />
        <SliderList
          items={this.state.items}
          handleSliderDestroy={this.handleSliderDestroy} />
        <InputArea
          text={this.state.text}
          handleSubmit={this.handleSubmit} />
      </Paper>
    )
  }
}

export default App

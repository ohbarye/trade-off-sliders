import React, { Component } from 'react'
import SliderList from './components/SliderList'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = { items: [], text: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSliderChange = this.handleSliderChange.bind(this)
    this.handleSliderDestroy = this.handleSliderDestroy.bind(this)
  }

  render() {
    return (
      <div>
        <h3>Trade Off Slider</h3>
        <SliderList
          items={this.state.items}
          handleSliderChange={this.handleSliderChange}
          handleSliderDestroy={this.handleSliderDestroy} />
        <form onSubmit={this.handleSubmit}>
          <input
            onChange={this.handleChange}
            value={this.state.text}
          />
          <button>
            Add #{this.state.items.length + 1}
          </button>
        </form>
      </div>
    )
  }

  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.text.length) {
      return
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    }
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
      text: ''
    }))
  }

  handleSliderChange(e) {
    const output = document.getElementById(e.target.dataset.id)
    output.value = e.target.value
  }

  handleSliderDestroy(e) {
    const newItems = this.state.items.filter(item => item.id != e.target.dataset.id)
    this.setState(prevState => ({ items: newItems }))
  }
}

export default App

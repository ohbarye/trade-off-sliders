import React, { Component } from 'react'
import { Slider, ListItem, RaisedButton } from 'material-ui';

class SliderItem extends Component {
  state = {
    slider: 0,
  }

  handleSlider = (event, value) => {
    this.setState({slider: value})
  }

  render() {
    return (
    <ListItem>
      {this.props.text}
      <Slider
        max={this.props.max}
        step={1}
        data-id={this.props.id}
        value={this.state.slider}
        onChange={this.props.handleSlider} />
      <span>{this.state.slider}</span>
      <RaisedButton onClick={() => this.props.handleSliderDestroy(this.props.id)} label='Destroy' />
    </ListItem>
    )
  }
}

export default SliderItem

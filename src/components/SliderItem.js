import 'rc-slider/assets/index.css';
import 'rc-tooltip/assets/bootstrap.css';
import React, { Component } from 'react'
import { ListItem, RaisedButton } from 'material-ui';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const SliderWithTooltip = createSliderWithTooltip(Slider);

class SliderItem extends Component {
  state = {
    value: this.props.max,
  }

  handleSlider = (value) => {
    this.setState({
      value,
    })
  }

  render() {
    return (
    <ListItem>
      {this.props.text}
      <SliderWithTooltip
        dots
        value={this.state.value}
        min={1}
        step={1}
        max={this.props.max}
        onChange={this.handleSlider}
      />
      <span>{this.state.value}</span>
      <RaisedButton onClick={() => this.props.handleSliderDestroy(this.props.id)} label='Destroy' />
    </ListItem>
    )
  }
}

export default SliderItem

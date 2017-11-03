import 'rc-slider/assets/index.css'
import React, { Component } from 'react'
import { ListItem } from 'material-ui/List'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Slider, { createSliderWithTooltip } from 'rc-slider'

const SliderWithTooltip = createSliderWithTooltip(Slider)

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
        <Grid container>
          <Grid item sm={4}>
            <Typography>
              {this.props.text}
            </Typography>
          </Grid>
          <Grid item sm={4}>
            <SliderWithTooltip
              dots
              value={this.state.value}
              min={1}
              step={1}
              max={this.props.max}
              onChange={this.handleSlider}
            />
          </Grid>
          <Grid item sm={1}>
            <span>{this.state.value}</span>
          </Grid>
          <Grid item sm={1}>
            <Button
              raised
              onClick={() => this.props.handleSliderDestroy(this.props.id)} >
              Destroy
            </Button>
          </Grid>
        </Grid>
      </ListItem>
    )
  }
}

export default SliderItem

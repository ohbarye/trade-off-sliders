import 'rc-slider/assets/index.css'
import React, { Component } from 'react'
import { ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
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
      <Paper>
      <ListItem>
        <Grid container
              alignItems={'center'}
              direction={'row'}
              justify={'center'}>
          <Grid item sm={3} xs={4}>
            <Typography type='headline'>
              {this.props.text}
            </Typography>
          </Grid>
          <Grid item sm={5} xs={5}>
            <SliderWithTooltip
              dots
              value={this.state.value}
              min={1}
              step={1}
              max={this.props.max}
              onChange={this.handleSlider}
            />
          </Grid>
          <Grid item sm={1} xs={1}>
            <Typography type='headline'>
              {this.state.value}
            </Typography>
          </Grid>
          <Grid item sm={1} xs={1}>
            <IconButton onClick={() => this.props.handleSliderDestroy(this.props.id)} >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      </ListItem>
      </Paper>
    )
  }
}

export default SliderItem

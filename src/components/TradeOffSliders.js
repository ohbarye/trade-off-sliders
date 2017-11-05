import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Grid,
  IconButton,
} from 'material-ui'
import CompareArrowsIcon from 'material-ui-icons/CompareArrows';
import SliderList from './SliderList'
import InputArea from './InputArea'

const TradeOffSliders = ({sliders, addSlider, editSlider, removeSlider}) => (
  <div>
    <AppBar position="static" color="primary">
      <Toolbar>
        <IconButton color="contrast">
          <CompareArrowsIcon />
        </IconButton>
        <Typography type="title" color="inherit">
          Trade-off Sliders
        </Typography>
      </Toolbar>
    </AppBar>
    <Grid container style={{padding: '16px', margin: '0px'}}>
      <Grid item sm={2} xs={false} />
      <Grid item sm={8} xs={12}>
        <SliderList sliders={sliders} editSlider={editSlider} removeSlider={removeSlider} />
        <InputArea addSlider={addSlider} />
      </Grid>
    </Grid>
  </div>
)

export default TradeOffSliders

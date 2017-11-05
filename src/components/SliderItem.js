import 'rc-slider/assets/index.css'
import React from 'react'
import { ListItem } from 'material-ui/List'
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
import Grid from 'material-ui/Grid'
import Typography from 'material-ui/Typography'
import Paper from 'material-ui/Paper'
import Slider, { createSliderWithTooltip } from 'rc-slider'

const SliderWithTooltip = createSliderWithTooltip(Slider)

const SliderItem = ({id, value, text, max, editSlider, removeSlider}) => (
<Paper>
  <ListItem>
    <Grid container
          alignItems={'center'}
          direction={'row'}
          justify={'center'}>
      <Grid item sm={3} xs={4}>
        <Typography type='headline'>
          {text}
        </Typography>
      </Grid>
      <Grid item sm={5} xs={5}>
        <SliderWithTooltip
          dots
          value={value}
          min={1}
          step={1}
          max={max}
          onChange={(value) => editSlider(id, { value: value })}
        />
      </Grid>
      <Grid item sm={1} xs={1}>
        <Typography type='headline'>
          {value}
        </Typography>
      </Grid>
      <Grid item sm={1} xs={1}>
        <IconButton onClick={() => removeSlider(id)} >
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  </ListItem>
  </Paper>
)

export default SliderItem

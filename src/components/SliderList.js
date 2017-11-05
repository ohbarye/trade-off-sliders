import React from 'react'
import SliderItem from './SliderItem'
import List from 'material-ui/List'

const SliderList = ({sliders, handleSliderChange, removeSlider}) => (
  <List>
    {sliders.map(slider => (
      <SliderItem key={slider.id}
                  max={sliders.length}
                  removeSlider={() => removeSlider(slider.id)}
                  {...slider} />
    ))}
  </List>
)

export default SliderList

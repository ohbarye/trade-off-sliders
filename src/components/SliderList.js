import React from 'react'
import SliderItem from './SliderItem'
import List from 'material-ui/List'

const SliderList = ({sliders, editSlider, removeSlider}) => (
  <List>
    {sliders.map(slider => (
      <SliderItem key={slider.id}
                  max={sliders.length}
                  editSlider={editSlider}
                  removeSlider={removeSlider}
                  {...slider} />
    ))}
  </List>
)

export default SliderList

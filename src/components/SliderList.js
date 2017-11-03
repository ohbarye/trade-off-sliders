import React from 'react'
import SliderItem from './SliderItem'
import List from 'material-ui/List'

const SliderList = ({items, handleSliderChange, handleSliderDestroy}) => (
  <List>
    {items.map(item => (
      <SliderItem {...item} max={items.length} key={item.id} handleSliderDestroy={handleSliderDestroy} />
    ))}
  </List>
)

export default SliderList

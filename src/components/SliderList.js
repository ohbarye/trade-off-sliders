import React from 'react'
import SliderItem from './SliderItem'

const SliderList = ({items, handleSliderChange, handleSliderDestroy}) => (
  <ul>
    {items.map(item => (
      <SliderItem {...item} max={items.length} key={item.id} handleSliderChange={handleSliderChange} handleSliderDestroy={handleSliderDestroy} />
    ))}
  </ul>
)

export default SliderList

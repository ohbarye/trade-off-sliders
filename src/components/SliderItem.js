import React from 'react'

const SliderItem = ({text, max, id, handleSliderChange, handleSliderDestroy}) => (
  <li>
    {text}
    <input type="range" min="1" max={max} step="1" data-id={id} onChange={handleSliderChange} />
    <output id={id} ></output>
    <button data-id={id} onClick={handleSliderDestroy} >Destroy</button>
  </li>
)

export default SliderItem

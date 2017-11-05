export const addSlider = text => {
  return {
    type: 'ADD_SLIDER',
    id: Date.now(),
    value: 1,
    text,
  }
}

export const removeSlider = id => {
  return {
    type: 'REMOVE_SLIDER',
    id,
  }
}

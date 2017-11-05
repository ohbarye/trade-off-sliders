export const addSlider = text => {
  return {
    type: 'ADD_SLIDER',
    id: Date.now(),
    text,
  }
}

export const editSlider = (id, params) => {
  return {
    type: 'EDIT_SLIDER',
    id,
    params
  }
}

export const removeSlider = id => {
  return {
    type: 'REMOVE_SLIDER',
    id,
  }
}

const sliders = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SLIDER':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          value: state.length + 1,
        }
      ]
    case 'EDIT_SLIDER':
      return state.map(slider => {
        if (slider.id === action.id) {
          return Object.assign({}, slider, action.params)
        } else {
          return slider
        }
      })
    case 'REMOVE_SLIDER':
      return state.filter(slider => slider.id !== action.id)
    default:
      return state
  }
}

export default sliders

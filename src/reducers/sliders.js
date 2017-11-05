const sliders = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SLIDER':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          value: action.value,
        }
      ]
    case 'REMOVE_SLIDER':
      return [
        ...state.filter(slider => slider.id !== action.id),
      ]
    default:
      return state
  }
}

export default sliders

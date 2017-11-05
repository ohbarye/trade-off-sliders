import { connect } from 'react-redux'
import { addSlider, editSlider, removeSlider } from '../actions'
import TradeOffSliders from '../components/TradeOffSliders'

const mapStateToProps = state => {
  return {
    sliders: state.sliders,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSlider: text => {
      dispatch(addSlider(text))
    },
    editSlider: (id, params) => {
      dispatch(editSlider(id, params))
    },
    removeSlider: id => {
      dispatch(removeSlider(id))
    },
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TradeOffSliders)

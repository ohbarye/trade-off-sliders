import { connect } from 'react-redux'
import { addSlider, removeSlider } from '../actions'
import TradeOffSliders from '../components/TradeOffSliders'


const mapStateToProps = state => {
  return {
    sliders: state.sliders
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addSlider: text => {
      dispatch(addSlider(text))
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

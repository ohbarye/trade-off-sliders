import React, { Component } from 'react'
import SliderList from './components/SliderList'
import InputArea from './components/InputArea'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'
import IconButton from 'material-ui/IconButton';
import CompareArrowsIcon from 'material-ui-icons/CompareArrows';


class App extends Component {
  state = {
    items: []
  }

  handleSubmit = (newItem) => {
    this.setState(prevState => ({
      items: prevState.items.concat(newItem),
    }))
  }

  handleSliderDestroy = (id) => {
    const newItems = this.state.items.filter(item => item.id !== id)
    this.setState(prevState => ({ items: newItems }))
  }

  render() {
    return (
      <div>
        <AppBar position="static" color="primary">
          <Toolbar>
            <IconButton color="contrast">
              <CompareArrowsIcon />
            </IconButton>
            <Typography type="title" color="inherit">
              Trade-off Slider
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container style={{padding: '16px', margin: '0px'}}>
          <Grid item sm={2} xs={false}></Grid>
          <Grid item sm={8} xs={12}>
            <SliderList
              items={this.state.items}
              handleSliderDestroy={this.handleSliderDestroy} />
            <InputArea
              text={this.state.text}
              handleSubmit={this.handleSubmit} />
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default App

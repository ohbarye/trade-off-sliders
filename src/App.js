import React, { Component } from 'react'
import SliderList from './components/SliderList'
import InputArea from './components/InputArea'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Grid from 'material-ui/Grid'


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
            <Typography type="title" color="inherit">
              Trade Off Slider
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container>
          <Grid item sm={2}></Grid>
          <Grid item sm={8}>
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

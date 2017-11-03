import React, { Component } from 'react'
import { RaisedButton, TextField, Paper, FlatButton, Dialog } from 'material-ui';

class InputArea extends Component {
  state = {
    text: '', open: false
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = () => {
    if (!this.state.text.length) {
      this.handleOpen()
      return
    }
    const newItem = {
      text: this.state.text,
      id: Date.now(),
    }
    this.props.handleSubmit(newItem)
    this.setState(prevState => ({ text: ''}))
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    return (
      <Paper>
        <TextField
          floatingLabelText="Thing We Value"
          onChange={this.handleChange}
          value={this.state.text} />
        <RaisedButton
          primary={true}
          label='Add'
          onClick={this.handleSubmit} />
        <Dialog
          title="Form is invalid"
          actions={
            <FlatButton
              label="Cancel"
              primary={true}
              onClick={this.handleClose}
            />
          }
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose} >
          Please enter some texts!
        </Dialog>
      </Paper>
    )
  }
}

export default InputArea

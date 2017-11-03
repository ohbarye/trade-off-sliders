import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'

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
      <div>
        <TextField
          label="Thing We Value"
          onChange={this.handleChange}
          value={this.state.text} />
        <Button
          raised
          color='primary'
          onClick={this.handleSubmit}>
          Add
        </Button>
        <Dialog
          open={this.state.open}
          onRequestClose={this.handleClose} >
          <DialogTitle>Form is invalid</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter some texts!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              color='primary'
              onClick={this.handleClose} >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

export default InputArea

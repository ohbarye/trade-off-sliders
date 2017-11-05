import React, { Component } from 'react'
import TextField from 'material-ui/TextField'
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog'
import Button from 'material-ui/Button'
import Grid from 'material-ui/Grid'

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
    this.props.addSlider(this.state.text)
    this.setState(prevState => ({ text: ''}))
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  componentDidMount = () => {
    document.getElementById('metrics').focus()
  }

  render() {
    return (
      <Grid style={{margin: '8px'}}
            container
            direction={'row'}
            alignItems={'flex-end'}
            justify={'center'}>
        <Grid item sm={6} xs={6}>
          <TextField
            id={'metrics'}
            label="What metrics do you add?"
            style={{width: '100%'}}
            onChange={this.handleChange}
            value={this.state.text} />
        </Grid>
        <Grid item sm={3} xs={6}>
          <Button
            raised
            color='primary'
            onClick={this.handleSubmit}>
            Add
          </Button>
        </Grid>
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
      </Grid>
    )
  }
}

export default InputArea

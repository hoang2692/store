import React, { Component } from 'react';
import { withStyles} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Style from './Style';
import TextField from '@material-ui/core/TextField';


class TaskFrom extends Component {
    render() {
        const {open , onClose}= this.props;
        const { classes } =this.props;
        return(
                <Dialog open={open} onClose={onClose} >
                <DialogTitle id="form-dialog-title">ADD_NEW</DialogTitle>
                <DialogContent>
                    <TextField
                        id="standard-read-only-input"
                        label="Read Only"
                        className={classes.textField}
                        margin="normal"
                     />
                    <TextField
                        id="standard-multiline-flexible"
                        label="Multiline"
                        multiline
                        rowsMax="4"
                        className={classes.textField}
                        margin="normal"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose} color="primary">
                    Cancel
                    </Button>
                    <Button onClick={onClose} color="primary">
                    Ok
                    </Button>
                </DialogActions>
                </Dialog>
    );
  }
}
  
    
export default withStyles(Style)(TaskFrom);

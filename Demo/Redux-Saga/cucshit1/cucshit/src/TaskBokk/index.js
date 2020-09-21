import { withStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import AddIcon from "@material-ui/icons/Add";
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import TaskFrom from "./../Component/taskFrom/index";
import TaskList from "./../Component/taskList/index";
import { STATUS } from "./../Constants/index";
import Style from "./Style";
import PropTypes from "prop-types";
import * as taskAction from "./../Action/task";

const listTask = [
  {
    id: 1,
    title: "Red book",
    descripstons: "Red material ui book",
    status: 0,
  },
  {
    id: 2,
    title: "Play football",
    descripstons: "With my friend",
    status: 2,
  },
  {
    id: 3,
    title: "Play game",
    descripstons: "",
    status: 1,
  },
];

class TaskBoard extends Component {
  state = {
    open: false,
  };

  componentDidMount()  {
    const { taskActionsCreater } = this.props;
    const {  fetchListTask } = taskActionsCreater;
      fetchListTask();
  }
  handleClose = () => {
    this.setState({
      open: false,
    });
  };
  openFrom = () => {
    this.setState({
      open: true,
    });
  };
  renderFrom() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskFrom open={open} onClose={this.handleClose} />;
    return xhtml;
  }
  renderBoard() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUS.map((status) => {
          const taskFiltered = listTask.filter(
            (task) => task.status === status.value
          );
          return (
            <TaskList task={taskFiltered} status={status} key={status.value} />
          );
        })}
      </Grid>
    );
    return xhtml;
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBoard}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openFrom}
        >
          <AddIcon /> Thêm Công Việc Mới
        </Button>
        {this.renderBoard()}
        {this.renderFrom()}
      </div>
    );
  }
}

TaskBoard.propTypes = {
  classes: PropTypes.object,
  taskActionsCreater: PropTypes.shape({  fetchListTask: PropTypes.func }),
};
const mapStateToProps = null;
const mapDispathToProps = dispatch => {
  return {
    taskActionsCreater: bindActionCreators(taskAction, dispatch),
  };
};
export default withStyles(Style)(connect(mapStateToProps, mapDispathToProps)(TaskBoard));

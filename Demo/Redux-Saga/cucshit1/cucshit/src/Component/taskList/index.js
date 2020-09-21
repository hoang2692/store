import React, { Component } from 'react';
import Style from './style';
import { withStyles } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TaskItem from './../taskItem/index';

class TaskList extends Component {
  render() {
    const { classes, task, status } = this.props;
    return (
      <Grid item md={4} xs={12} key={status.value}>
        <Box mt={1} mb={1}>
          <div className={classes.status}> {status.lable}</div>
        </Box>
        <div className={classes.wrapperListTask}></div>
        {
          task.map(task => {
            return(
              <TaskItem task={task} status={status} key ={task.id}/>
            )
          })
        }
      </Grid>
    )
  }
}

export default withStyles(Style)(TaskList);

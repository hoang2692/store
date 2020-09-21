import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Style from './Style';
import { withStyles} from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import TaskBokk from '../../TaskBokk/index';
import theme from '../../Commons/Themes/index';
import { Provider } from 'react-redux';
import configureStore from '../../Redux/configureStore';

const store = configureStore();

class App extends Component{
  render(){
    return (
      <Provider store={store}> 
          <TaskBokk/>
      </Provider>
     
    );
  }
}

export default withStyles (Style) (App);

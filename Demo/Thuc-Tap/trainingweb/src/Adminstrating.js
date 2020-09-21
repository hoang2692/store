import React,{Component} from 'react';
import Navadmin from './components/Navadmin';
import './App.css';
import Billmanager from './components/Billmanager';
import Productmanager from './components/Productmanager';
import Employeemanager from './components/Employee';
import Members from './components/Members';
class Adminstrator extends Component{
  render(){
    return(
      <div>
      <Navadmin />
      <Members />
      </div>
    );
  }
}
export default Adminstrator;
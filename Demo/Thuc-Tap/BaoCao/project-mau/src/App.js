import React,{Component} from 'react';
import './App.css';
import Title from './components/title';
import Input from './components/input';
import Table from './components/tableList';
class App extends Component {
  render(){
  return (
    <div className="App">
      <header className="App-header">
       <div class="container">
       <div className='row' style={{height: 50}}></div>
           <Title />
           <Input />
           <Table />
       </div>
      </header>
    </div>
  );}
}

export default App;
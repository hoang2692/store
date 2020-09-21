import React,{Component} from 'react';
import '../App.css';
class Input extends Component {
  render(){
  return (
    <form className='form'>
      <div className="form-row">
        <div className="form-group col-md-5">
          <label htmlFor="inputState">Input</label>
          <select id="inputState" className="form-control">
            <option selected>BTC</option>
            <option>OBAY</option>
            <option>CSE</option>
            <option>ETH</option>
            <option>LTC</option>
            <option>BCH</option>
            <option>MOMO</option>
            <option>PAYPAL</option>
            </select>
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="inputState">Output</label>
          <select id="inputState" className="form-control">
          <option selected>OPAY</option>
          <option>BTC</option>
          <option>CSE</option>
          <option>ETH</option>
          <option>LTC</option>
          <option>BCH</option>
          <option>MOMO</option>
          <option>PAYPAL</option>
          </select>
        </div>
        <div className="form-group col-md-2">
            <button type="submit" className="btn btn-primary buttoninput">
                Exchange
            </button>
        </div>
      </div>
      <div className="form-row">
      <label htmlFor="inputState">Search transaction</label>
      <div className="input-group">
        <input type="text" class="form-control" placeholder="txId, hash, transactionID, orderID,..."/>
        <div className="input-group-append">
          <button className="btn btn-secondary" type="button">
            <i className="fa fa-search"></i>
          </button>
        </div>
      </div>
      </div>
  </form>

  );}
}

export default Input;
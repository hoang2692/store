import React,{Component} from 'react';
import Footer from './components/footer';
import Show from './components/Show';
import Info from './components/Info';
import './App.css';
import Navmenu from './components/Navmenu';
import Address from './components/Address';
import Dangnhap from './components/Dangnhap';
import Dangky from './components/Dangky';
import Hanhtrinh from'./components/hanhtrinh_cf';
import Hanhtrinh_tra from'./components/hanhtrinh_tra';
import Coffee1 from './components/coffee1';
import Coffee2 from './components/coffee2';
import Coffee3 from './components/coffee3';
import Coffee4 from './components/coffee4';
import Latra2 from './components/latra2';
import Latra1 from './components/latra1';
import Admin from './Adminstrating';
import Adminstrator from './Adminstrating';
import Bakery from './components/bakery';
import Dinning from './components/Dining';
import ThucUong from './components/ThucUong';
import Cart from './components/Cart';
import Deliver from './components/Deliver';



class App extends Component {
  render(){
  return (
    /*
    
    <Dangnhap />
    <Dangky />
    <Hanhtrinh />
    <Hanhtrinh_tra />
    <Coffee1 />
    <Coffee2 />
    <Coffee3 />
    <Coffee4 />
    <Latra2 />
    <Adminstrator />
    <Latra1 />
    <Dinning />
    <Bakery />
    <ThucUong />
    <Cart />
    <Deliver />
    */
    <div>
    <Navmenu />
    <Show />
    <Info />
    <Address />
    <Footer />
    </div>
  );
}
}
export default App;

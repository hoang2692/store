import React,{Component} from 'react';
import './App.css';
import DoiMauXe from './components/doiXe';
import Props_demo from'./components/props-demo';
import Table_demo from './components/table';
import DanhSachSanPham from './components/DanhSachsp';
import GIoHang from './components/modal';
class App extends Component {
		render(){
	var products=[{
					id:1,
		 			imge:'././img/xeDen.jpg',
      				name:'Xe Den',
      				title:'Audi'
		},
		{id:2,
		 			imge:'././img/xeDo.jpg',
      				name:'Xe Do',
      				title:'Mes'
		},
		{id:3,
		 			imge:'././img/xeTrang.jpg',
      				name:'Xe Trang',
      				title:'HonDa'
		}];

	let elements = products.map((product,index) => {
			return <Props_demo key={product.id} 
						imge={product.imge}
      					name={product.name}
      					title={product.title}
      					>
      		</Props_demo>
	});

  return (
  	<div>
      <div className="container" style={{ marginLeft: 490 }}>
        <DoiMauXe >
        </DoiMauXe>
      </div>
      <div class="container">
     	  <h1 style={{ textAlign: "center" }}> Duyệt Array </h1>
        <div className="container mb-2">
          <div className="row mt-1">
            {elements}
          </div>   
    	 </div>
       </div>
    	<div class="container">
      <h1 style={{ textAlign: "center" }}> Table Array </h1>
    	<Table_demo />
    	</div>
      <DanhSachSanPham />
      <GIoHang />
  </div>
  )}
}

export default App;

import React,{Component} from 'react';

class Show extends Component {
  render(){
  return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="../../img/0588a19d8f4153-combobanhmiphuclong.jfif" alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="../../img/db927ede913142-1920x576.jfif" alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="../../img/f7ef44440dff5a-1920x576.jfif" alt="Third slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="../../img/a79cfb74dc494b-voucherphclong.jpg" alt="Fourth slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="../../img/1b40d8c47a517e-digital_happylunch01.jpg" alt="Fifth slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
  );
}
}
export default Show;

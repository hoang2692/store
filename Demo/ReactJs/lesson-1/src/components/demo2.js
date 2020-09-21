import React from 'react';


function Product() {
	let title = 'CYBERSOFT';
	let productname=<p><b>FrondEnd XXX </b></p>;
  return (
    <div className="Product">
    {title}
    {productname}
    </div>
  );
}

export default Product;
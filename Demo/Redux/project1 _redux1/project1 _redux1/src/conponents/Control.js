import React, { Component } from 'react';
import Search from './Search';
import Sort from './Sort';

class Control extends Component {
  render(){
    return (
      <div>
            <div className="row mt-15">
            {/*thanh tìm kiếm và sắp xếp*/}
            <Search />
            {/*thanh sắp xếp*/}
            <Sort />
            </div>
      </div>
    );
  }
}

export default Control;

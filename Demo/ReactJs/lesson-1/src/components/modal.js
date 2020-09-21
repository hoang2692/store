import React,{Component} from 'react';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'react-bootstrap';
import SanPham from './sanPham';



class GioHang extends Component{
	constructor(props){
		super(props);
		this.state={
			show: false
		}
	};

	handleShow = () =>{
		this.setState({show: true})
	};
	handleClose = () =>{
		this.setState({show: false})
	};
	render(){

		return(
			<div>
			<Button variant="primary" onClick={this.handleShow}>
        Launch demo modal
      </Button>

      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
			</div>
			);
	}
}

export default GioHang;
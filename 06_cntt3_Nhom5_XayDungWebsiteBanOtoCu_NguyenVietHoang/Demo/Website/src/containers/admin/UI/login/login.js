import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Login extends Component {
  constructor(props){
    super(props);
    this.state={
      txtuser: "",
      txtpassword: ""
    }
  }
  _onChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]:  value
    })
    console.log(this.state)
  }

  _onSubmit = (event) =>{
    event.preventDefault();
    var data ={
      user: this.state.txtuser,
      password: this.state.txtpassword
    }
    console.log(this.state)
    this.props.Login(data);
  }
  componentDidMount(){
    if (this.props.isLogin) {
      this.props.history.push("/admin");
    } else {
      this.props.history.push("/admin/login");
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    console.log("nextsprops",nextProps)
    if (nextProps && nextProps.isLogin) {
      this.props.history.push("/admin");
    }
  }
  render() {
    return (
        <div style={{backgroundColor: '#ced2d6',paddingBottom: '195px',paddingTop: '150px'}}>
        <div className="container">
          <div
            className="row justify-content-center align-items-center"
          >
            <div className="col-md-5" style={{borderRadius: '5px',backgroundColor: 'white',padding: '30px 0px'}}>
              <div className="col-md-12">
                <form onSubmit = {this._onSubmit}>
                  <h3 className="text-center text-info">Login Admin</h3>
                  <div className="form-group">
                    <label className="text-info">
                      Username:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="txtuser"
                      className="form-control"
                      onChange = {this._onChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="text-info">
                      Password:
                    </label>
                    <br />
                    <input
                      type="password"
                      name="txtpassword"
                      className="form-control"
                      onChange = {this._onChange}
                      required
                    />
                  </div>
                  <div className="form-row" style={{justifyContent: "center"}}>
                    <button type="submit" className="btn btn-primary"> Đăng nhập </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.login.isLogin
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
   Login: (data) =>dispatch({type: "LOGIN_ADMIN_REQUEST", data})
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);

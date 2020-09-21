import React, {Component} from 'react';

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            name:'',
            level: 0
        }
    }
    
    setOnChange = (event) =>{
        var target= event.target;
        var name=target.name;
        var value=target.value
        if(name === 'level')
        {
            {value=target.value === '0' ? 0 :value=target.value === '1' ? 1 :2}
        }
        this.setState({
            [name]: value
        })
    }

    onSetSubmit = (event) =>{
        event.preventDefault();
        let {onSubmit}= this.props;
        onSubmit(this.state)
    }

    setCancel = (event) =>{
        this.props.setCancel(event)
        this.setState({
            name:'',
            level:0
        })
    }

    render() {
        return(
            <form className="form-inline" onSubmit={this.onSetSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control"
                            placeholder="Item Name"    
                            name='name'
                            value={this.state.name}
                            onChange={this.setOnChange}/>
                </div>
                <div className="form-group">
                    <select className="form-control"
                            name='level'
                            value={this.state.level}
                            onChange={this.setOnChange}>
                        <option value={0}>Small</option>
                        <option value={1}>Medium</option>
                        <option value={2}>High</option>
                    </select>
                </div>
                <button type="Submit" className="btn btn-primary" >Submit</button>
                <button type="reset" className="btn btn-default" onClick={() => this.setCancel(false)}>Cancel</button>
            </form>
        )
    }
}

export default Form;
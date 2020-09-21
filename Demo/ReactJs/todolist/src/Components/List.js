import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Item from './Item';
import Items from '../Mockdata/Items';
import Edit from './Edit';
import Form from './Form';
import Title from './Title';
import Search from './Search';
import Sort from './Sort';

class List extends Component {
    constructor(props){
        super(props);
        var arr=[];
        if(Items.length>0){
            for(let i = 0; i < Items.length; i++) {
                if(arr.indexOf(Items[i].level) === -1)
                 arr.push(Items[i].level)
            }
        }
        arr.sort(function(a, b){return a - b});
        this.state={
           items: Items,
           indexEdit:0,
           idEdit:'',
           nameEdit:'',
           levelEdit:0,
           arr1:arr,
           showForm: false,
           inputSearch:'',
           sortBy: 'name',
           sortValue: 1,
        }
    }

    

    cancel =() =>{
        this.setState({
            idEdit:''
        })

    }

    setEdit = (item,index)=>{
        this.setState({
            indexEdit:index,
            idEdit:item.id,
           nameEdit:item.name,
           levelEdit:item.level
        })

    }

    setDelete = (item) =>{
        let {items} = this.state;
        if(items.length > 0){
                for(let i = 0; i < items.length; i++) {
                    if(items[i].id === item.id) {
                        items.splice(i,1)
                        this.setState({items})
                        break;
                    }
                }
        }

    }

    setOnChangeName = (value) =>{
        this.setState({nameEdit:value})
    }

    setOnChangeLevel = (value) =>{
        this.setState({levelEdit:value})
    }

    setSave = () =>{
        let {nameEdit,levelEdit,idEdit} = this.state;
        return this.state.items.map((item) => {
            if(item.id === idEdit) {
                item.name=nameEdit
                item.level=+levelEdit
                }
            this.setState({idEdit:''})
        })
    }

    renderItem = () => {
        let {idEdit,nameEdit,levelEdit,indexEdit,arr1}= this.state;
        return this.filter().map((item,index) => {
            if(item.id === idEdit) {
                return (
                    <Edit 
                    key={index}
                    indexEdit={indexEdit}
                    nameEdit={nameEdit}
                    levelEdit={levelEdit}
                    arr1={arr1}
                    cancel={this.cancel}
                    setOnChangeName={this.setOnChangeName}
                    setOnChangeLevel={this.setOnChangeLevel}
                    setSave={this.setSave}
                    />

                )
            }
            return (
                <Item
                    key={index}
                    item={item}
                    index={index+1}
                    setDelete={this.setDelete}
                    setEdit={this.setEdit}
                  />
            )
        });
      }
    onSubmit = (data) =>{
          let {items}=this.state;
          data.id=uuidv4()
          items.push(data);
          this.setState({
              items:items
          })


      }

    setCancel= (event) => {
          this.setState({showForm: event})
      }

    setAddItem = () =>{
        this.setState({showForm: !this.state.showForm})
    }

    // setOnChange =(inputSearch) =>{
    //     this.setState({inputSearch: inputSearch})
    // }

    setOnChange = (inputSearchForm) => {
        var r=inputSearchForm+"";
        r=r.toLowerCase();
        r = r.replace(new RegExp(/[aăâàằầáắấãẵẫảẳẩạặậ]/g),"a");
        r = r.replace(new RegExp(/æ/g),"ae");
        r = r.replace(new RegExp(/ç/g),"c");
        r = r.replace(new RegExp(/[eêèềéếẽễẻểẹệ]/g),"e");
        r = r.replace(new RegExp(/[iíìịĩỉ]/g),"i");
        r = r.replace(new RegExp(/ñ/g),"n");                
        r = r.replace(new RegExp(/[oôòồóốõỗỏổọộ]/g),"o");
        r = r.replace(new RegExp(/œ/g),"oe");
        r = r.replace(new RegExp(/[uúùụũủưứừựữử]/g),"u");
        r = r.replace(new RegExp(/[yýỳỹỷỵ]/g),"y");
        this.setState({inputSearch: r})
      };

    filter = () =>{
        let {items,inputSearch} =this.state;
        if(inputSearch){
            return items.filter((item) =>{
                    var r=item.name+"";
                    r=r.toLowerCase();
                    r = r.replace(new RegExp(/[aăâàằầáắấãẵẫảẳẩạặậ]/g),"a");
                    r = r.replace(new RegExp(/æ/g),"ae");
                    r = r.replace(new RegExp(/ç/g),"c");
                    r = r.replace(new RegExp(/[eêèềéếẽễẻểẹệ]/g),"e");
                    r = r.replace(new RegExp(/[iíìịĩỉ]/g),"i");
                    r = r.replace(new RegExp(/ñ/g),"n");                
                    r = r.replace(new RegExp(/[oôòồóốõỗỏổọộ]/g),"o");
                    r = r.replace(new RegExp(/œ/g),"oe");
                    r = r.replace(new RegExp(/[uúùụũủưứừựữử]/g),"u");
                    r = r.replace(new RegExp(/[yýỳỹỷỵ]/g),"y");
                return r.toLowerCase().indexOf(inputSearch.toLowerCase()) !== -1; // tét thu 
             })
        }
        return items
    }

    onSort = (sortName,sortValue) =>{
        this.setState({sortBy:sortName,
            sortValue: sortValue
        })
    }


    render(){
        let {showForm,sortBy,sortValue,items} =this.state;
        if(sortBy === 'name')
        {
        items.sort((a,b)=>{
            if(a.name > b.name) return sortValue;
            else if (a.name < b.name) return -sortValue;
            else return 0;
        })}
        else {
            items.sort((a,b)=>{
                if(a.level > b.level) return sortValue;
                else if (a.level < b.level) return -sortValue;
                else return 0;
        })}
        return ( 
            <div className="container">
                <Title />
                <div className="row">
                    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                        <Search change={this.setOnChange}/>
                    </div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <Sort onSort={this.onSort}
                                sortBy={this.state.sortBy}
                                sortValue={this.state.sortValue} />
                    </div>
                    <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
                        <button type="button" className="btn btn-info btn-block marginB10" onClick={this.setAddItem} >{showForm ? 'Close' : 'Add Item'}</button>
                    </div>
                </div>
                <div className="row marginB10">
                <div className="col-md-offset-7 col-md-5">
                   {showForm ? <Form onSubmit={this.onSubmit}
                            setCancel={this.setCancel}/> : ''}
                </div>
                </div>
                    <div className="panel panel-success">
                        <div className="panel-heading">List Item</div>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th style={{ width: '10%' }} className="text-center">#</th>
                                    <th>Name</th>
                                    <th style={{ width: '15%' }} className="text-center">Level</th>
                                    <th style={{ width: '15%' }}>Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.renderItem()}
                                </tbody>
                        </table>
                    </div>
                    
            </div>         
          );
        }
    }

export default List;
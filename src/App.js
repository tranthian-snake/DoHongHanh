import React,{Component} from 'react';
import Search from "./component/search/Search";
import Table from "./component/table/Table"
import './App.css';
import {Button, Select} from "antd";

class App extends Component{
    render(){
        return(
            <div className="container">
                <div className="text-center">
                    <h1>Danh Sách Thí Sinh Có Bài Luận</h1>
                    <hr/>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Search/>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <div className="row">
                            <div>
                               <Table/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;

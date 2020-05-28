import React,{Component} from "react";
import { Select } from 'antd';
import { Button } from 'antd';
import './search.css'


class Search extends Component {
    render() {
        const {Option} = Select;

        function onChange(value) {
            console.log(`selected ${value}`);
        }

        function onBlur() {
            console.log('blur');
        }

        function onFocus() {
            console.log('focus');
        }

        function onSearch(val) {
            console.log('search:', val);
        }


            return (
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">Tìm Bài Luận</h3>
                    </div>
                    <div className="panel-body ">
                        <form >
                            <div className="input-group col-xs-7 col-sm-7 col-md-7 col-lg-7 ">
                                <input type="text" className="form-control mf-15"
                                       placeholder="Nhập tên/mã thí sinh/email ..."/>
                            </div>
                            <div className="form-group mt-20 col-xs-6 col-sm-6 col-md-6 col-lg-6 ">
                                <label>Cuộc Thi : </label><br/>
                                <Select
                                    showSearch
                                    style={{width: 450}}
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>
                            <div className="form-group mt-20">
                                <label>Môn Thi : </label><br/>
                                <Select
                                    showSearch
                                    style={{width: 400}}
                                    placeholder="Select a person"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Option value="jack">Jack</Option>
                                    <Option value="lucy">Lucy</Option>
                                    <Option value="tom">Tom</Option>
                                </Select>
                            </div>

                            <div className="text-center search ">
                                <Button className="mr-10">Tìm kiếm</Button>
                            </div><br/>

                            <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                                <div className="form-group mr-10 ">
                                    <label>Số Thí Sinh Có Bài Luận :</label>
                                    <div className="form-control"/>
                                </div>
                            </div>


                        </form>
                    </div>
                </div>
            )
        }
    }
export default Search;
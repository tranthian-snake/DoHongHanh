import React, {Component} from "react";
import './Table.css'

class Table extends Component {
    render() {
        return (
            <div className="tableD">
                <table className="table table-bordered table-hover">
                    <thead>
                    <tr>
                        <th className="text-center">STT</th>
                        <th className="text-center">ID</th>
                        <th className="text-center">Tên Thí Sinh</th>
                        <th className="text-center">Đơn Vị</th>
                        <th className="text-center">Cuộc Thi</th>
                        <th className="text-center">Môn Thi</th>
                        <th className="text-center">Bài Luận</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <th className="text-center">1</th>
                        <td className="text-center">ABC</td>
                        <td>Nguyễn Văn A</td>
                        <td className="text-center">AAAA</td>
                        <td className="text-center">BBBBBB</td>
                        <td className="text-center">Toán</td>
                        <td className="text-center">
                            <button type="button" className="btn btn-info">
                                <span className="fa fa-plus"/>Xem Bài Luận
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th className="text-center">2</th>
                        <td className="text-center">ABC</td>
                        <td>Nguyễn Văn A</td>
                        <td className="text-center">AAAA</td>
                        <td className="text-center">BBBBBB</td>
                        <td className="text-center">Toán</td>
                        <td className="text-center">
                            <button type="button" className="btn btn-info">
                                <span className="fa fa-plus"/>Xem Bài Luận
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th className="text-center">3</th>
                        <td className="text-center">FDF</td>
                        <td>Nguyễn Văn A</td>
                        <td className="text-center">AAAA</td>
                        <td className="text-center">BBBBBB</td>
                        <td className="text-center">Toán</td>
                        <td className="text-center">
                            <button type="button" className="btn btn-info">
                                <span className="fa fa-plus"/>Xem Bài Luận
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th className="text-center">4</th>
                        <td className="text-center">FFS</td>
                        <td>Nguyễn Văn A</td>
                        <td className="text-center">AAAA</td>
                        <td className="text-center">BBBBBB</td>
                        <td className="text-center">Toán</td>
                        <td className="text-center">
                            <button type="button" className="btn btn-info">
                                <span className="fa fa-plus"/>Xem Bài Luận
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <th className="text-center">5</th>
                        <td className="text-center">NHN</td>
                        <td>Nguyễn Văn A</td>
                        <td className="text-center">AAAA</td>
                        <td className="text-center">BBBBBB</td>
                        <td className="text-center">Toán</td>
                        <td className="text-center">
                            <button type="button" className="btn btn-info">
                                <span className="fa fa-plus"/>Xem Bài Luận
                            </button>
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
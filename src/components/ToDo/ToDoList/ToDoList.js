import React, { Component } from 'react';
import ToDoItem from './../ToDoItem/ToDoItem'

class ToDoList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <h1 className="text-center">Danh sách công việc</h1>
                <div className="row">
                    <table className="table table-condensed table-hover">
                        <thead>
                            <tr className="primary">
                                <th>STT</th>
                                <th>Công việc</th>
                                <th>Nhãn</th>
                                <th>Độ ưu tiên</th>
                                <th>Người thực hiện</th>
                                <th>Xử lý</th>
                                <th>Tình trạng</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.props.items.map((item, index)=> <ToDoItem key={index} data={item}  order={index}/>)
                        }
                        </tbody>
                    </table>
                </div>
            </React.Fragment>
        );
    }
}

export default ToDoList;
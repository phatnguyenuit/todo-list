import React, { Component } from 'react';
import ToDoItem from './../ToDoItem/ToDoItem'

class ToDoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Danh sách công việc</h1>
                <table className="table table-responsive table-hover table-condensed">
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
        );
    }
}

export default ToDoList;
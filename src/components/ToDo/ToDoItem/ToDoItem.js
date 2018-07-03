import React, { Component } from 'react';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {name, labels, priority, assignees, status} = this.props.data
        return (
            <tr>
                <td>{this.props.order + 1}</td>
                <td>{name}</td>
                <td>{labels}</td>
                <td>{priority}</td>
                <td>{assignees}</td>
                <td>
                    <button className="btn btn-danger">Sửa</button> 
                    <button className="btn btn-primary">Trạng thái</button>
                </td>
                <td>{status}</td>
            </tr>
        );
    }
}

export default ToDoItem;
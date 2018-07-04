import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class ToDoItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            data: props.data,
        };
    }
    onEditAction = e => {
        e.preventDefault();
        this.setState({
            editMode: true
        });
    }
    onChangeName = e => {
        e.preventDefault();
        let data = this.state.data;
        data['name'] = e.target.value;
        this.setState({data});
    }
    onSaveAction = e => {
        e.preventDefault();
        this.setState({
            editMode: false
        });
    }

    handleChangeStatus = (selectValue) => {
        let data = this.state.data;
        console.log(selectValue);
        data['status'] = selectValue.value;
        this.setState({data});
    }

    render() {
        const {name, labels, priority, assignees, status} = this.state.data;
        const {editMode} = this.state;
        let itemHtml = false;
        let selectHtml = (
            <Select
                name="status"
                value={status}
                onChange={this.handleChangeStatus}
                options={[
                { value: 'default', label: 'Trạng thái' },
                { value: 'doing', label: 'Đang tiến hành' },
                { value: 'done', label: 'Hoàn thành' },
                { value: 'not-yet', label: 'Chưa bắt đầu' },
                { value: 'canceled', label: 'Hủy bỏ' },
                ]}
                clearable={false}
            />
        );
        if (editMode){
            itemHtml = (
                <tr>
                    <td>{this.props.order + 1}</td>
                    <td>
                        <input value={name} onChange={this.onChangeName}/>
                    </td>
                    <td>{labels}</td>
                    <td>{priority}</td>
                    <td>{assignees}</td>
                    <td>
                        <div className="col-xs-12">
                            <div className="col-xs-4">
                                <button className="btn btn-primary" onClick={this.onSaveAction}>Save</button>
                            </div>
                            <div className="col-xs-8">
                            {selectHtml}
                            </div>
                        </div>
                    </td>
                    <td>{status}</td>
                </tr>
            );
        }
        else{
            itemHtml = (
                <tr>
                    <td>{this.props.order + 1}</td>
                    <td>{name}</td>
                    <td>{labels}</td>
                    <td>{priority}</td>
                    <td>{assignees}</td>
                    <td>
                       <div className="col-xs-12">
                            <div className="col-xs-4">
                                <button className="btn btn-danger" onClick={this.onEditAction}>Sửa</button>
                            </div>
                            <div className="col-xs-8">
                            {selectHtml}
                            </div>
                        </div>
                    </td>
                    <td>{status}</td>
                </tr>
            );
        }
        return itemHtml;
    }
}

export default ToDoItem;
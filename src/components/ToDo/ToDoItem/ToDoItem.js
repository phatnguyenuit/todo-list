import React, { Component } from 'react';
import Select from 'react-select';
import {Icon} from 'react-fa'
import 'react-select/dist/react-select.css';

const icons = {
    'doing': 'spinner',
    'not-yet': 'anchor',
    'done': 'check-square',
    'canceled': 'trash',
    'default': 'info'
};

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

    onChangeLabels = e => {
        e.preventDefault();
        let data = this.state.data;
        data['labels'] = e.target.value;
        this.setState({data});
    }

    onChangePriority = e => {
        e.preventDefault();
        let data = this.state.data;
        data['priority'] = e.target.value;
        this.setState({data});
    }

    onChangeAssignees = e => {
        e.preventDefault();
        let data = this.state.data;
        data['assignees'] = e.target.value;
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
                optionClassName="primary"
            />
        );
        if (editMode){
            itemHtml = (
                <tr>
                    <td>{this.props.order + 1}</td>
                    <td>
                        <input value={name} onChange={this.onChangeName} className="form-control"/>
                    </td>
                    <td>
                        <input value={labels} onChange={this.onChangeLabels} className="form-control"/>
                    </td>
                    <td>
                        <input value={priority} onChange={this.onChangePriority} className="form-control"/>
                    </td>
                    <td>
                        <input value={assignees} onChange={this.onChangeAssignees} className="form-control"/>
                    </td>
                    <td width="20px">
                        <button className="btn btn-primary" onClick={this.onSaveAction}>Save</button>
                    </td>
                    <td>
                        {selectHtml}
                    </td>
                    <td>
                        <Icon name={icons[status]} />
                    </td>
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
                    <td width="20px">
                        <button className="btn btn-danger" onClick={this.onEditAction}>Sửa</button>
                    </td>
                    <td>
                        {selectHtml}
                    </td>
                    <td>
                        <Icon name={icons[status]} />
                    </td>
                </tr>
            );
        }
        return itemHtml;
    }
}

export default ToDoItem;
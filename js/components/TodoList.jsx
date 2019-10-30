import React, { Component } from 'react';
import styled from 'styled-components';
import formatDate from '../scripts/formatDate';
import getTime from '../scripts/getTime';

const TodoWrapper = styled.div`
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 40px;
  width: 300px;
`;

const TodoCard = styled.div`
  border-radius: 3px;
  box-shadow: 0px 5px 13px -1px rgba(0,0,0,0.20);
  color: #444;
  font-size: 15px;
  padding: 16px;
`;

const CardTitle = styled.h2`
  color: #DC143C;
  margin: 0 0 8px;
  font-size: 20px;
  font-weight: normal;
`;

const AddItemButton = styled.button`
  background: blue url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='%23FFF' viewBox='0 0 24 24'%3E%3Cpath d='M24 10h-10v-10h-4v10h-10v4h10v10h4v-10h10z'/%3E%3C/svg%3E") no-repeat center/10px;
  width: 32px;
  height: 32px;
  background-color: #5d50e6;
  border-radius: 50%;
  border: 0;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Date = styled.h3`
  margin: 0;
  line-height: 32px;
`;

const TodoInput = styled.input`
  border: 2px solid #5b4df2;
  display: block;
  width: 100%;
  margin-bottom: ${props => (props.active ? '16px' : '0')};
  padding: 0 8px;
  outline: none;
  height: 100%;
`;

const TaskCount = styled.p`
  margin-top: 0;
`;

const InputWrapper = styled.div`
  position: relative;
  min-height: ${props => (props.active ? '40px' : '0')};
  height: 0;
  overflow: hidden;
  transition: min-height 400ms cubic-bezier(0.465, -0.085, 0.390, 1.395);
`;

const AddTaskButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  border: 0;
  background-image: linear-gradient(to right, #877eea, #5b4df2);
  color: white;
`;

const taskCount = tasks => `${tasks.length} ${tasks.length !== 1 ? 'tasks' : 'task'}`;

class TodoList extends Component {
  constructor(...args) {
    super(...args);
    this.handleAddItemClick = this.handleAddItemClick.bind(this);
    this.handleAddTaskClick = this.handleAddTaskClick.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.state = {
      inputActive: false,
      inputValue: '',
      tasks: [{
        name: 'Go to lunch',
        id: 0,
      }, {
        name: 'Brush teeth',
        id: 1,
      }],
    };
  }

  handleAddItemClick() {
    this.setState({ inputActive: true });
  }

  handleAddTaskClick() {
    const key = getTime();
    const value = this.state.inputValue;

    if (value.length > 0) {
      this.setState({ tasks: [...this.state.tasks, { name: value, id: key }] });
    }
  }

  updateInputValue(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    return (
      <TodoWrapper>
        <CardTitle>To-Do List</CardTitle>
        <TodoCard>
          <TopWrapper>
            <Date>{ formatDate() }</Date>
            <AddItemButton onClick={this.handleAddItemClick} />
          </TopWrapper>
          <TaskCount>{taskCount(this.state.tasks)}</TaskCount>
          <InputWrapper active={this.state.inputActive}>
            <TodoInput
              active={this.state.inputActive}
              onChange={this.updateInputValue}
              onSubmit={this.handleAddTaskClick}
            />
            <AddTaskButton onClick={this.handleAddTaskClick}>Add task</AddTaskButton>
          </InputWrapper>
          <ul>
            { this.state.tasks.map(task => <li key={task.id}>{ task.name }</li>) }
          </ul>
        </TodoCard>
      </TodoWrapper>
    );
  }
}

export default TodoList;

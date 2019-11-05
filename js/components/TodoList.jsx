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

  ul {
    margin: 0;
    padding: 0;
  }

  li {
    padding: 16px;
    list-style: none;
    margin-bottom: 4px;
    background-color: #eee;
    position: relative;

    &:hover,
    &:focus,
    &:active {
      button {
        opacity: 1;
      }
    }
  }
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
  transition: transform 0.5s ease;
  transform: rotate(45deg);
  transform: ${props => (props.isOpen === true ? 'rotate(45deg)' : 'rotate(0)')};
  outline: none;
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

const InputWrapper = styled.form`
  position: relative;
  min-height: ${props => (props.active ? '47px' : '0')};
  height: 0;
  overflow: hidden;
  transition: min-height 400ms cubic-bezier(0.465, -0.085, 0.390, 1.395);
  margin-bottom: 16px;
`;

const AddTaskButton = styled.button`
  position: absolute;
  top: 7px;
  right: 6px;
  border: 0;
  background-image: linear-gradient(to right, #877eea, #5b4df2);
  color: white;
  border-radius: 16px;
  padding: 8px 24px;
`;

const BinButton = styled.button`
  width: 24px;
  height: 24px;
  background: url('../../public/assets/trash-bin.png') no-repeat center/130%;
  border: 0;
  padding: 0;
  position: absolute;
  right: 16px;
  top: 12px;
  opacity: 0;
  transition: opacity 0.5s;
  outline: none;
`;

const TickButton = styled.button`
  width: 24px;
  height: 24px;
  background: url('../../public/assets/tick.png') no-repeat center/contain;
  border: 0;
  padding: 0;
  position: absolute;
  right: 48px;
  top: 12px;
  opacity: 0;
  transition: opacity 0.5s;
  outline: none;
`;

const TaskLi = styled.li`
  transition: box-shadow 0.3s;
  outline: none;

  &:hover,
  &:focus,
  &:active {
    box-shadow: 0px 0px 0px 2px #877eea inset;
  }
`;

const taskCount = tasks => `${tasks.length} ${tasks.length !== 1 ? 'tasks' : 'task'}`;

class TodoList extends Component {
  constructor(...args) {
    super(...args);
    this.handleAddItemClick = this.handleAddItemClick.bind(this);
    this.handleAddTaskClick = this.handleAddTaskClick.bind(this);
    this.updateInputValue = this.updateInputValue.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.strikeItem = this.strikeItem.bind(this);
    this.state = {
      inputActive: false,
      inputValue: '',
      tasks: [{
        name: 'Eat breakfast',
        id: 0,
        completed: false,
      }, {
        name: 'Eat lunch',
        id: 1,
        completed: false,
      }, {
        name: 'Eat dinner',
        id: 3,
        completed: false,
      }],
    };
  }

  handleAddItemClick() {
    this.setState({ inputActive: !this.state.inputActive });
  }

  handleAddTaskClick(event) {
    const key = getTime();
    const value = this.state.inputValue;

    event.preventDefault();

    if (value.length > 0) {
      this.setState({ tasks: [...this.state.tasks, { name: value, id: key }] });
    }
  }

  updateInputValue(event) {
    this.setState({ inputValue: event.target.value });
  }

  removeItem(event) {
    const taskId = +event.target.getAttribute('data-task-id');
    this.setState({ tasks: this.state.tasks.filter(task => task.id !== taskId) });
  }

  strikeItem(event) {
    const taskId = +event.target.getAttribute('data-task-id');
    const newTasks = this.state.tasks.map((cur) => {
      if (cur.id === taskId) {
        const copy = Object.assign({}, cur);
        copy.completed = !copy.completed;
        return copy;
      }
      return cur;
    });

    this.setState({ tasks: newTasks });
  }

  render() {
    return (
      <TodoWrapper>
        <CardTitle>To-Do List</CardTitle>
        <TodoCard>
          <TopWrapper>
            <Date>{formatDate()}</Date>
            <AddItemButton isOpen={this.state.inputActive} onClick={this.handleAddItemClick} />
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
            { this.state.tasks.map(task => (
              <TaskLi key={task.id} tabIndex="0">
                { task.completed ? <s>{task.name}</s> : task.name }
                <BinButton data-task-id={task.id} onClick={this.removeItem} />
                <TickButton data-task-id={task.id} onClick={this.strikeItem} />
              </TaskLi>
            )) }
          </ul>
        </TodoCard>
      </TodoWrapper>
    );
  }
}

export default TodoList;

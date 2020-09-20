import React, { useState } from "react";
import TodoList from "./TodoList";
import "./App.css";
import styled from "styled-components";

const Input = styled.input`
  height: 15px;
  margin: 15px;
  border-radius: 5rem;
  border-style: solid;
  border-color: #eeeeee;
  box-shadow: 10px 10px 36px -10px rgba(0, 0, 0, 0.75);
  padding: 15px;
  font-size: large;
  outline: none;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #f6f7f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  padding: 15px;
  background-color: #4caf50;
  color: white;
  font-size: medium;
  border-style: none;
  border-radius: 15rem;
  box-shadow: 10px 10px 36px -10px rgba(0, 0, 0, 0.75);
  outline: none;

  &:active {
    background-color: #3c9f40;
  }
`;

function App() {
  const [todoList, setTodoList] = useState(["task1", "task2"]);
  const [text, setText] = useState("");
  const [editText,setEdit] = useState("");
  const [editIndex,setEditIndex] = useState("");

  const onTextChange = ({ target: { value } }) => {
    setText(value);
  };
  const onEdit = ({ target: { value } }) => {
    setEdit(value);
  };

  const addTask = () => {
    // add todo
    setTodoList([...todoList, text]);
    // clear text
    setText("");
  };

  const removeTodo = (index) => {
    let todo = [...todoList];

    todo.splice(index, 1);
    setTodoList(todo);
  };

  const editTodo = () => {
    let todo = [...todoList];
    todo.splice(editIndex, 1, editText);
    setTodoList(todo);
    setEdit("");
    closemodal();
  };
  const showmodal = (index) => {
    document.getElementById("myModal").style.display = "block";
    setEdit(todoList[index])
    setEditIndex(index)
  }
  const closemodal = () => {
    document.getElementById("myModal").style.display = "none";
    // setEdit("");
  };

  return (
    <Container>
      <div>
        <Input type="text" value={text} onChange={onTextChange} />
        <Button onClick={addTask}>Add task</Button>
      </div>
      {/* <TodoList todoList={todoList} editTodo={editTodo} /> */}
      <TodoList
        todoList={todoList}
        removeTodo={removeTodo}
        editTodo={showmodal}
      />
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="close" onClick={closemodal}>
              &times;
            </span>
            <h2>Edit Todo</h2>
          </div>
          <div className="modal-body">
            <textarea
              style={{ width: "100%", margin: "30px -2px" }}
              rows="4"
              value={editText} onChange={onEdit} 
            ></textarea>
          </div>
          <div className="modal-footer" style={{ textAlign: "right" }}>
            <button onClick={editTodo}>Save</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default App;

import React from 'react'
import styled from 'styled-components'
import Todo from './Todo'

const Container = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    max-width:500px;

`

const TodoList = ({todoList,removeTodo,editTodo}) => {
    return (
        <Container>
            { 
                todoList.map((todo, index) => <Todo value={todo} key={index} onClickRemove={() => removeTodo(index)} onClickEdit={() => editTodo(index)} />)
            }
        </Container>
    )
}

export default TodoList

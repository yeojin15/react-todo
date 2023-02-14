import React from 'react'
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoReducer';

const Todos=styled.div`
  margin-top: var(--gap-big);
  padding-bottom: var(--gap-big);
`;

const TodoList = () => {
  const todos = useTodoState();

  return (
    <Todos>
      {todos.map(item=>(
        <TodoItem
          key={item.id}
          id={item.id}
          text={item.text}
          done={item.done}
        />
      ))}
    </Todos>
  )
}

export default TodoList
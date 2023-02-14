import React from 'react'
import Header from './Header';
import Calendars from './Calendars';
import TodoList from './TodoList';
import TodoCreate from './TodoCreate';

const Wrap = () => {
  return (
    <div>
      <Header />
      <Calendars />
      {/* <TodoCreate/> */}
      {/* <TodoList/> */}
    </div>
  )
}

export default Wrap
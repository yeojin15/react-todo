import React, { useState } from 'react'
import { useTodoState } from '../TodoReducer';
import styled from 'styled-components';
import Calendar from 'react-calendar';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css'; 
import '../styles/calendar.css';
import TodoCreate from './TodoCreate';
import TodoList from './TodoList';

const TodoWrap=styled.div`
  width: 100%; padding: var(--gap-large) 0;
`;
const TodoTop=styled.div`
  display: flex; justify-content: space-between; align-items: center;
  > h2 {font-size: var(--fz-big); font-weight: bold; color: var(--main);}
`;
const TodoCount=styled.div`
  text-align: right; font-size: var(--fz-base); font-weight: bold;
`;


const Calendars = ({id}) => {
  const [ date, dateChange ] = useState(new Date());
  const todos = useTodoState();

  const doneTodo = () => {
    let onlyDone = todos.filter(item=>item.done===true)
    return onlyDone.length
  }


  return (
    <>
      <Calendar 
        onChange={dateChange}
        value={date}
        calendarType="Hebrew"
        formatDay={(locale, date) =>date.toLocaleString('en', { day: 'numeric' })}
        next2Label={null}
        prev2Label={null}
        onClickDay={(value, event) => console.log('Clicked day: ', moment(value).format("YYYY년 MM월 DD일"))}
      />
      <TodoWrap>
        <TodoTop>
          <h2>{moment(date).format("YYYY년 MM월 DD일")}</h2>
          <TodoCount>{doneTodo()} / {todos.length} 완료</TodoCount>
        </TodoTop>

        <TodoCreate/>
        <TodoList />
      </TodoWrap>
    </>
  )
}

export default Calendars
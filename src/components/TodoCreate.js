import React, {useState} from 'react'
import styled from 'styled-components';
import { useTodoDispatch, useTodoNextId } from '../TodoReducer';

const TodoBox=styled.form`
  width: 100%; height: 36px; display: flex; justify-content: space-between; align-items: center;
  margin-top: var(--gap-big);
`;
const TodoInput=styled.input`
  flex: 1; height: 100%; border-bottom: 1px solid var(--carbon);
`;

const TodoCreate = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };


  return (
    <TodoBox onSubmit={onSubmit}>
      <TodoInput
        autoFocus
        placeholder="할 일을 입력 후, Enter 를 누르세요"
        onChange={onChange}
        value={value}
      />
    </TodoBox>
  )
}

export default TodoCreate
import React, { useState } from 'react'
import styled, {css} from 'styled-components';
import { useTodoDispatch } from '../TodoReducer';
import { MdDone } from "react-icons/md";
import { FaTrashAlt, FaPen } from "react-icons/fa";

const Remove = styled.div`
  color: var(--gray); cursor: pointer;
`;
const RemoveBackDrop = styled.div`
  position: fixed; z-index: 100; left: 0; top: 0; width: 100%; height: 100%; background: rgba(var(--rgb-black),.3);
`;
const RemoveConfirm = styled.div`
  position: fixed; left: 50%; top: 50%; transform: translate(-50%,-50%); 
  width: 200px; color: var(--black);
  padding: var(--gap-base); background: #fff; border-radius: 12px; text-align: center;
  > button {margin: var(--gap-big) 5px 0; width: 50px; height: 30px; border-radius: 8px; line-height: 30px; text-align: center; background: var(--red); color: #fff; font-size: var(--fz-sm); cursor: pointer;}
  > button.cancel {background: rgba(var(--rgb-black),.3)}
`;
const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Remove} {
      display: initial;
    }
  }
`;
const Edit=styled.div`
  margin-right: var(--gap-sm); color: var(--yellow); cursor: pointer;
`;
const EditInput=styled.input`
  flex: 1; margin-right: var(--gap-big); border-bottom: 1px solid var(--carbon);
`;
const CheckCircle = styled.div`
  width: 20px; height: 20px; border-radius: 50%; border: 1px solid var(--gray);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: var(--gap-sm);
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid var(--main);
      color: var(--main);
    `}
`;
const Text = styled.div`
  flex: 1;
  color: #495057;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      color: var(--gray);
    `}
`;


const TodoItem = ( { id, done, text } ) => {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type:'TOGGLE', id});
  const onRemove = () => dispatch({ type:'REMOVE', id});
  const [ delOverlay, setDelOverlay ] = useState(false);
  const [ isEdit, setIsEdit ] = useState(false)
  const [ todoTxt, setTodoTxt ] = useState(text)

  const deleteConfirm = (e) => {
    e.stopPropagation()
    setDelOverlay(true)
  }
  const deleteCancel = (e) => {
    e.stopPropagation()
    setDelOverlay(false)
  }
  const onKeyEnter=(e)=>{
    if(e.key==='Enter'){
      setIsEdit(false)
    }
  }
  const newInput=(e)=>{
    let txt =e.target.value;
    setTodoTxt(txt)
  }

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>

      {
        isEdit 
        ? <EditInput autoFocus type='text' value={todoTxt} onChange={newInput} onKeyDown={onKeyEnter} ></EditInput>
        : <Text done={done}>{todoTxt}</Text>
      }

      <Edit>
        <FaPen onClick={setIsEdit} />
      </Edit>
      <Remove >
        <FaTrashAlt onClick={deleteConfirm} />
        {delOverlay 
        ?  (
          <RemoveBackDrop onClick={deleteCancel}>
            <RemoveConfirm >
              <p>할 일을 삭제할까요?</p>
              <button onClick={onRemove}>삭제</button>
              <button className='cancel' onClick={deleteCancel}>취소</button>
            </RemoveConfirm>
          </RemoveBackDrop>
        )
        : null
      }
      </Remove>
    </TodoItemBlock>
  )
}

export default TodoItem
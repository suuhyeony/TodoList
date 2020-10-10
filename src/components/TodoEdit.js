import React, { useState } from "react";
import styled, { css } from "styled-components";
import { FaCheckDouble } from "react-icons/fa";
import { useTodoDispatch } from "../TodoContext";

const Form = styled.form`
  background: #f8f9fa;
  border-radius: 16px;
`;

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  box-sizing: border-box;
`;

const Edited = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    margin-right: 8px;
    cursor: pointer;
    &:hover {
        color: #40c057;
    }
`

function TodoEdit() {
    // const [edit, setEdit] = useState(false)
    const [value, setValue] = useState(todo.text)
    
    const dispatch = useTodoDispatch();

    const onToggle = () => setEdit(!edit)
    const onChange = (e) => setValue(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: 'CREATE',
            todo: {
                id: id,
                text: value,
                done: false
            }
        })
        // setEdit(false);
    }

    return (
        <Form onSubmit={onSubmit}>
        <Input onChange={onChange} value={value} />
    </Form>
    <Edited>
        <FaCheckDouble />
    </Edited>
    )
}

export default React.memo(TodoEdit);
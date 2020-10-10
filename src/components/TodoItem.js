import React from "react";
import styled, { css } from "styled-components";
import { MdDone, MdDelete } from "react-icons/md";
import { FaStar, FaEdit, FaCheckDouble } from "react-icons/fa";
import { useTodoDispatch } from "../TodoContext";

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #38d9a9;
      color: #38d9a9;
    `}
`;

const Text = styled.div`
  display: inline-block;
  font-size: 21px;
  color: #495057;
  ${(props) =>
    props.done &&
    css`
      color: #ced4da;
    `}
  ${(props) =>
    props.mark &&
    css`
      background: linear-gradient(to top, yellow 10%, transparent 51%);
    `}
`;

const Icons = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const Highlight = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  margin-right: 10px;
  cursor: pointer;
  &:hover {
    color: #ffe066;
  }
`;

const Rewrite = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  margin-right: 8px;
  cursor: pointer;
  &:hover {
    color: #212529;
  }
`;

const Remove = styled.div`
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
`;

const TodoItemBlock = styled.div`
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover {
    ${Highlight} {
      opacity: 1;
    }
    ${Rewrite} {
      opacity: 1;
    }
    ${Remove} {
      opacity: 1;
    }
  }
`;

function TodoItem({ id, done, text, mark }) {
  const dispatch = useTodoDispatch();
  const onToggle = () =>
    dispatch({
      type: "TOGGLE",
      id,
    });
  const onMark = () =>
    dispatch({
      type: "MARK",
      id,
    });
  const onRemove = () =>
    dispatch({
      type: "REMOVE",
      id,
    });

  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done} mark={mark}>
        {text}
      </Text>
      <Icons>
        <Highlight onClick={onMark}>
          <FaStar />
        </Highlight>
        <Rewrite>
          <FaEdit />
        </Rewrite>
        <Remove onClick={onRemove}>
          <MdDelete />
        </Remove>
      </Icons>
    </TodoItemBlock>
  );
}

export default React.memo(TodoItem);

import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { space, elemSize, palette, fontSizes } from '../../../theme'

const Container = styled.li`
  display: flex;
  margin-bottom: ${space.lg};
  height: ${elemSize.todoHeight};
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

  img {
    width: 200px;
  }
`

const Body = styled.div`
  width: 100%;
  padding: ${space.md};

  button {
    display: block;
    border: none;
    justify-content: center;
    text-decoration: none;
    font-weight: 400;
    padding: 6px 20px;
    letter-spacing: 1px;
    border-radius: 2px;
    color: white;
    background: red;
    outline: none;
    cursor: pointer;

    &:hover {
      opacity: 0.8;
    }
  }
`

const TitleInput = styled.input`
  border: 1px solid ${palette.grey20};
  outline: none;
  width: 220px;
  padding: ${space.xs};
  font-weight: bold;
  letter-spacing: 1px;
  font-size: ${fontSizes.sm};

  &:active,
  &:focus {
    border-color: ${palette.primary};
  }
`

const Title = styled.p`
  width: 220px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  letter-spacing: 1px;
  font-weight: bold;
  margin: 0;
  border: 1px solid rgba(255, 255, 255, 0);
  cursor: text;

  &:hover {
    padding: ${space.xs};
    border: 1px solid ${palette.grey20};
  }
`

const StatusText = styled.p`
  font-weight: bold;
  margin: ${space.xs} 0;
  font-size: ${fontSizes.sm};
  color: ${props => props.color};
`

const TodoItem = props => {
  const [showInput, setShowInput] = useState(false)

  const {
    title,
    id,
    isFinished,
    imgURL,
    handleRemoveTodo,
    handleToggleTodo,
    handleChangeTitle,
  } = props

  const statusText = isFinished ? 'Done' : 'In Progress'

  const renderTitle = showInput ? (
    <TitleInput
      autoFocus
      data-testid="edit-input"
      value={title}
      onBlur={() => setShowInput(false)}
      onKeyDown={e => (e.key === 'Enter' ? setShowInput(false) : null)}
      onChange={e => handleChangeTitle(e.target.value, id)}
    />
  ) : (
    <Title onClick={() => setShowInput(true)} data-testid="todo-title">
      {title}
    </Title>
  )

  return (
    <Container data-testid="todo-item">
      <img src={imgURL} alt="todo-img" />
      <Body>
        {renderTitle}
        <StatusText color={isFinished ? palette.success : palette.primary}>
          {statusText}
        </StatusText>

        <button data-testid="remove-btn" onClick={() => handleRemoveTodo(id)}>
          Remove
        </button>
        <input
          checked={isFinished}
          type="checkbox"
          data-testid="checked-btn"
          onChange={e => handleToggleTodo(id, e.target.checked)}
        />
      </Body>
    </Container>
  )
}

TodoItem.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  isFinished: PropTypes.bool,
  imgURL: PropTypes.string,
  handleRemoveTodo: PropTypes.func,
  handleToggleTodo: PropTypes.func,
  handleChangeTitle: PropTypes.func,
}

export default TodoItem

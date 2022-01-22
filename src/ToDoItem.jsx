import PropTypes from 'prop-types';
import { useContext } from 'react';
import styled from '@emotion/styled/macro';
import { ThemeContext } from './themeContext';
import Checkbox from './Checkbox';

const ToDoItemContainer = styled.li`
  border-top: 1px solid ${({ theme }) => theme.borderColor};
  padding: 8px 12px;
  color: ${({ theme }) => theme.textColor};

  :first-of-type {
    border-top: none;
  }

  & > span:last-of-type {
    vertical-align: middle;
    padding: 0 8px;
  }
`;

const ToDoItem = ({ todo, onChange }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <ToDoItemContainer theme={theme}>
      <Checkbox
        type="checkbox"
        checked={todo.isCompleted}
        onChange={(e) => onChange(todo.id, e.currentTarget.checked)}
      />
      <span>{todo.title}</span>
    </ToDoItemContainer>
  );
};

ToDoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

ToDoItem.defaultProps = {
  onChange: (id, newState) => {},
};

export default ToDoItem;

/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */

import React from 'react';
import { Todo } from '../types/Todo';
import classNames from 'classnames';

type Props = {
  todos: Todo;
  todoStatusChange: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const TodoItem: React.FC<Props> = ({
  todos,
  todoStatusChange,
  deleteTodo,
}) => {
  return (
    <div
      data-cy="Todo"
      key={todos.id}
      className={classNames('todo', { completed: todos.completed })}
    >
      <label className="todo__status-label">
        <input
          data-cy="TodoStatus"
          type="checkbox"
          className="todo__status"
          checked={todos.completed}
          onChange={() => todoStatusChange(todos.id)}
        />
      </label>

      <span data-cy="TodoTitle" className="todo__title">
        {todos.title}
      </span>

      {/* Remove button appears only on hover */}
      <button
        type="button"
        className="todo__remove"
        data-cy="TodoDelete"
        onClick={() => deleteTodo(todos.id)}
      >
        ×
      </button>

      {/* overlay will cover the todo while it is being deleted or updated */}
      <div data-cy="TodoLoader" className="modal overlay">
        <div className="modal-background has-background-white-ter" />
        <div className="loader" />
      </div>
    </div>
  );
};

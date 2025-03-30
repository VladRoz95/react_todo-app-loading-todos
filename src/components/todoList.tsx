import { TodoItem } from './todoItem';
import { Todo } from '../types/Todo';
import React from 'react';

type Props = {
  filteredTodo: Todo[];
  todoStatusChange: (id: number) => void;
  deleteTodo: (id: number) => void;
};

export const TodoList: React.FC<Props> = ({
  filteredTodo,
  todoStatusChange,
  deleteTodo,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {filteredTodo.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            todoStatusChange={todoStatusChange}
            deleteTodo={deleteTodo}
            todos={todo}
          />
        );
      })}
    </section>
  );
};

import { Todo } from '@/types';
import TodoItem from './TodoItem';

interface Props {
  items: Todo[];
  setCompletedTodo: (id: string) => void;
  removeTodo: (id: string) => void;
}

const TodoList = ({ items, setCompletedTodo, removeTodo }: Props) => {
  return (
    <div className="flex flex-col gap-2 my-3">
      {items.map((item) => (
        <TodoItem
          key={item.id}
          item={item}
          setCompletedTodo={setCompletedTodo}
          removeTodo={removeTodo}
        />
      ))}
    </div>
  );
};

export default TodoList;

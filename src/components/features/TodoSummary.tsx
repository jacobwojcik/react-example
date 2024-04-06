import { Todo } from '@/types';

interface Props {
  todos: Todo[];
}

const TodoSummary = ({ todos }: Props) => {
  const completedTodosCount = todos.filter((todo) => todo.completed).length;
  const totalTodosCount = todos.length;

  return (
    <div className="flex my-2 ml-2">
      <h2 className="font-semibold">
        {totalTodosCount
          ? ` Wykonano ${completedTodosCount} / ${totalTodosCount} zadań`
          : `Brak zadań do wykonania.`}
      </h2>
    </div>
  );
};

export default TodoSummary;

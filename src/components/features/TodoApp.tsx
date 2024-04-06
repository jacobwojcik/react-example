import { useState } from 'react';
import { Todo } from '@/types';
import AppHeader from './AppHeader';
import TodoInput from './TodoInput';
import TodoSummary from './TodoSummary';
import TodoList from './TodoList';
import { useToast } from '../ui/use-toast';

function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: '1',
      title: 'Zrobić zakupy',
      completed: false,
    },
    {
      id: '2',
      title: 'Zrobić pranie',
      completed: true,
    },
  ]);
  const { toast } = useToast();

  const setCompletedTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    toast({
      title: 'Usunięto zadanie',
    });
  };

  return (
    <>
      <div className="max-w-[680px] mx-auto my-16">
        <AppHeader />
        <TodoInput setTodos={setTodos} />
        <TodoSummary todos={todos} />
        <TodoList
          items={todos}
          setCompletedTodo={setCompletedTodo}
          removeTodo={removeTodo}
        />
      </div>
    </>
  );
}

export default TodoApp;

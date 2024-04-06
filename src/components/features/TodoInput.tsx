import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChangeEvent, useState } from 'react';
import { Todo } from '@/types';
import { useToast } from '../ui/use-toast';

interface TodoInputProps {
  setTodos: (todos: Todo[] | ((prevTodos: Todo[]) => Todo[])) => void;
}

const TodoInput: React.FC<TodoInputProps> = ({ setTodos }) => {
  const [todoValue, setTodoValue] = useState<string>('');
  const { toast } = useToast();

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(event.target.value);
  };

  const addTodo = () => {
    if (!todoValue.trim()) {
      toast({
        title: 'Nie można dodać pustego zadania!',
        description: 'Wpisz treść zadania.',
        variant: 'destructive',
      });
      return;
    }

    const newTodo: Todo = {
      id: Date.now().toString(),
      title: todoValue.trim(),
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setTodoValue('');
    toast({
      title: 'Dodano nowe zadanie!',
      description: todoValue.trim(),
    });
  };

  return (
    <div className="flex gap-4">
      <Input
        placeholder="Twoje zadanie..."
        value={todoValue}
        onChange={handleInputChange}
      />
      <Button onClick={addTodo}>Dodaj</Button>
    </div>
  );
};

export default TodoInput;

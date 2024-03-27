import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskList from './TaskList';

describe('TaskList component', () => {
  const tasks = [
    { id: 1, title: 'Task 1', description: 'Task description 1', dueDate: '2023-12-31', status: 'pending' },
    { id: 2, title: 'Task 2', description: 'Task description 2', dueDate: '2024-01-15', status: 'completed' },
  ];

  test('renders TaskList component with tasks', () => {
    const { getByText } = render(<TaskList tasks={tasks} />);
    const task1Title = getByText('Task 1');
    expect(task1Title).toBeInTheDocument();
    const task2Title = getByText('Task 2');
    expect(task2Title).toBeInTheDocument();
  });

  test('renders status of each task', () => {
    const { getByText } = render(<TaskList tasks={tasks} />);
    const task1Status = getByText('Status: pending');
    expect(task1Status).toBeInTheDocument();
    const task2Status = getByText('Status: completed');
    expect(task2Status).toBeInTheDocument();
  });
});

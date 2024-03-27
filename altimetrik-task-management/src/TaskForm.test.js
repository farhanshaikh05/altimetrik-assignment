import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';

describe('TaskForm component', () => {
  test('renders TaskForm component', () => {
    const { getByText } = render(<TaskForm showModal={true} />);
  
    const addButton = getByText('Add Task');
    expect(addButton).toBeInTheDocument();
  });

  test('submits form with valid input', () => {
    const onAddTask = jest.fn();
    const { getByText, getByLabelText } = render(<TaskForm onAddTask={onAddTask} />);

    // Open the modal
    fireEvent.click(getByText('Add Task'));

    // Now that the modal is open, find the form elements
    const titleInput = getByLabelText('Title');
    fireEvent.change(titleInput, { target: { value: 'Task title' } });

    const descriptionInput = getByLabelText('Description');
    fireEvent.change(descriptionInput, { target: { value: 'Task description' } });

    const dueDateInput = getByLabelText('Due Date');
    fireEvent.change(dueDateInput, { target: { value: '2023-12-31' } });

    const modalAddButton = getByText('Add Task', { selector: 'button.insertTask' });
    fireEvent.click(modalAddButton);
    expect(onAddTask).toHaveBeenCalledWith({
      title: 'Task title',
      description: 'Task description',
      dueDate: '2023-12-31',
    });
  });

});

const executeQuery = require('../utils/database');

const createTask =  async (req, res) => {
    const { title, description, dueDate } = req.body;
    try {
      await executeQuery('INSERT INTO tasks (title, description, dueDate) VALUES (?, ?, ?)', [title, description, dueDate]);
     return res.status(201).send('Task created successfully');
    } catch (error) {
      console.error('Error creating task:', error);
     return res.status(500).json({ error: 'Error creating task' });
    }
};

const getAllTask = async (req, res) => {
    const tasks = await executeQuery("SELECT *, DATE_FORMAT(dueDate,'%d-%m-%Y') AS dueDate FROM tasks");
    return res.json(tasks);
};

const deleteTask =  async (req, res) => {
    const { id } = req.params;
    try {
      await executeQuery('DELETE FROM tasks WHERE id = ?', [id]);
      return res.send('Task deleted successfully');
    } catch (error) {
      console.error('Error deleting task:', error);
     return res.status(500).json({ error: 'Error deleting task' });
    }
};

const updateTask =  async (req, res) => {
    const { id } = req.params;
    const { title, description, dueDate, status } = req.body;
    try {
      await executeQuery('UPDATE tasks SET title=?, description=?, dueDate=?, status=? WHERE id = ?', [title, description, dueDate, status, id]);
      return res.send('Task updated successfully');
    } catch (error) {
      console.error('Error updating task:', error);
     return res.status(500).json({ error: 'Error updating task' });
    }
};


module.exports = {
    createTask,
    getAllTask,
    deleteTask,
    updateTask
}
let tasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
  ];
  
  export default function handler(req, res) {
    const { method, body } = req;
  
    switch (method) {
      case 'GET':
        res.status(200).json(tasks);
        break;
  
      case 'POST':
        const newTask = { id: tasks.length + 1, ...body };
        tasks.push(newTask);
        res.status(201).json(newTask);
        break;
  
      case 'PUT':
        const { id, title, completed } = body;
        const index = tasks.findIndex(task => task.id === id);
        if (index !== -1) {
          tasks[index] = { id, title, completed };
          res.status(200).json(tasks[index]);
        } else {
          res.status(404).json({ message: 'Task not found' });
        }
        break;
  
      case 'DELETE':
        const taskId = body.id;
        tasks = tasks.filter(task => task.id !== taskId);
        res.status(200).json({ message: 'Task deleted successfully' });
        break;
  
      default:
        res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
        res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
  
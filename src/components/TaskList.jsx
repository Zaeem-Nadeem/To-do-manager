// TaskList.jsx
import { Box, Typography } from '@mui/material';
import { useDroppable } from '@dnd-kit/core';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdateTask, onDeleteTask, onToggleComplete }) => {
  const { setNodeRef } = useDroppable({ id: 'tasks' });

  if (tasks.length === 0) {
    return (
      <Box
        sx={{
          textAlign: 'center',
          py: 8,
          color: 'text.secondary',
        }}
      >
        <Typography variant="h6" gutterBottom>
          No tasks found
        </Typography>
        <Typography variant="body2">
          Add a new task to get started!
        </Typography>
      </Box>
    );
  }

  return (
    <Box ref={setNodeRef} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {tasks.map((task, index) => (
        <TaskItem
          key={task.id}
          task={task}
          index={index}
          onUpdate={onUpdateTask}
          onDelete={onDeleteTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </Box>
  );
};

export default TaskList;

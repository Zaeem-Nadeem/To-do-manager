// TaskItem.jsx
import { useState } from 'react';
import {
  Card,
  CardContent,
  Checkbox,
  Typography,
  IconButton,
  Box,
  Chip,
  useTheme,
} from '@mui/material';
import { Edit, Delete, DragIndicator } from '@mui/icons-material';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import EditTaskDialog from './EditTaskDialog';

const TaskItem = ({ task, index, onUpdate, onDelete, onToggleComplete }) => {
  const [editOpen, setEditOpen] = useState(false);
  const theme = useTheme();

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: task.id,
  });

  const style = {
    transform: CSS.Transform.toString(transform),
    opacity: isDragging ? 0.7 : 1,
    transition: theme.transitions.create(['transform', 'opacity']),
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <>
      <Card
        ref={setNodeRef}
        elevation={isDragging ? 8 : 2}
        sx={{
          mb: 2,
          ...style,
          '&:hover': {
            boxShadow: 4,
          },
          ...(isDragging && {
            transform: 'rotate(2deg)',
            boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
            zIndex: 1000,
          }),
        }}
      >
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
            <Box sx={{ mt: 0.5 }} {...attributes} {...listeners}>
              <DragIndicator 
                sx={{ 
                  color: 'text.secondary', 
                  cursor: 'grab',
                  '&:hover': {
                    color: 'primary.main',
                    transform: 'scale(1.1)',
                  },
                  transition: 'all 0.2s ease',
                }} 
              />
            </Box>

            <Checkbox
              checked={task.completed}
              onChange={(e) => {
                e.stopPropagation();
                onToggleComplete(task.id);
              }}
              sx={{ mt: -1 }}
            />

            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
              <Typography
                variant="h6"
                sx={{
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? 'text.secondary' : 'text.primary',
                  wordBreak: 'break-word',
                }}
              >
                {task.title}
              </Typography>

              {task.description && (
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    mt: 1,
                    textDecoration: task.completed ? 'line-through' : 'none',
                    wordBreak: 'break-word',
                  }}
                >
                  {task.description}
                </Typography>
              )}

              <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
                <Chip
                  label={task.completed ? 'Completed' : 'Pending'}
                  size="small"
                  color={task.completed ? 'success' : 'warning'}
                  variant="outlined"
                />
                <Typography variant="caption" color="text.secondary">
                  Created {formatDate(task.createdAt)}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <IconButton
                size="small"
                onClick={(e) => {
                  e.stopPropagation();
                  setEditOpen(true);
                }}
                aria-label="edit task"
              >
                <Edit />
              </IconButton>
              <IconButton
                size="small"
                color="error"
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(task.id);
                }}
                aria-label="delete task"
              >
                <Delete />
              </IconButton>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <EditTaskDialog
        open={editOpen}
        onClose={() => setEditOpen(false)}
        task={task}
        onUpdate={onUpdate}
      />
    </>
  );
};

export default TaskItem;
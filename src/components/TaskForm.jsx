import { useState } from 'react';
import {
  Card,
  CardContent,
  TextField,
  Button,
  Box,
  Typography,
  Collapse,
  IconButton,
} from '@mui/material';
import { Add, ExpandMore, ExpandLess } from '@mui/icons-material';

const TaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [titleError, setTitleError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setTitleError('Title is required');
      return;
    }

    onAddTask({
      title: title.trim(),
      description: description.trim(),
    });

    setTitle('');
    setDescription('');
    setTitleError('');
    setExpanded(false);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    if (titleError) setTitleError('');
  };

  return (
    <Card elevation={2}>
      <CardContent>
        <Box 
          sx={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'space-between',
            mb: expanded ? 2 : 0 
          }}
        >
          <Typography variant="h6" component="h2">
            Add New Task
          </Typography>
          <IconButton
            onClick={() => setExpanded(!expanded)}
            aria-label="expand form"
          >
            {expanded ? <ExpandLess /> : <ExpandMore />}
          </IconButton>
        </Box>

        <Collapse in={expanded}>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Task Title *"
              value={title}
              onChange={handleTitleChange}
              error={!!titleError}
              helperText={titleError}
              margin="normal"
              autoFocus
            />
            
            <TextField
              fullWidth
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              margin="normal"
              multiline
              rows={3}
              placeholder="Optional description..."
            />

            <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
              <Button
                type="submit"
                variant="contained"
                startIcon={<Add />}
                fullWidth
              >
                Add Task
              </Button>
              <Button
                variant="outlined"
                onClick={() => {
                  setTitle('');
                  setDescription('');
                  setTitleError('');
                }}
                sx={{ minWidth: 'auto', px: 3 }}
              >
                Clear
              </Button>
            </Box>
          </Box>
        </Collapse>
      </CardContent>
    </Card>
  );
};

export default TaskForm;
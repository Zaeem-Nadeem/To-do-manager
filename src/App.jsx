// App.jsx
import { useState, useEffect } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline, Container, Box } from '@mui/material';
import { DndContext } from '@dnd-kit/core';
import Header from './components/Header';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterBar from './components/FilterBar';
import { generateId, loadTasks, saveTasks } from './utils/storage';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    secondary: { main: '#dc004e' },
    background: { default: '#f5f5f5', paper: '#ffffff' },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    secondary: { main: '#f48fb1' },
    background: { default: '#121212', paper: '#1e1e1e' },
  },
});

function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    const savedTasks = loadTasks();
    setTasks(savedTasks);
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode) setDarkMode(JSON.parse(savedDarkMode));
  }, []);

  useEffect(() => saveTasks(tasks), [tasks]);
  useEffect(() => localStorage.setItem('darkMode', JSON.stringify(darkMode)), [darkMode]);

  const addTask = (taskData) => {
    const newTask = {
      id: generateId(),
      ...taskData,
      completed: false,
      createdAt: new Date().toISOString(),
    };
    setTasks(prev => [...prev, newTask]);
  };

  const updateTask = (id, updates) => {
    setTasks(prev => prev.map(task => task.id === id ? { ...task, ...updates } : task));
  };

  const deleteTask = (id) => setTasks(prev => prev.filter(task => task.id !== id));
  const toggleComplete = (id) => setTasks(prev => prev.map(task => task.id === id ? { ...task, completed: !task.completed } : task));

  const getFilteredTasks = () => {
    switch (filter) {
      case 'completed': return tasks.filter(task => task.completed);
      case 'pending': return tasks.filter(task => !task.completed);
      default: return tasks;
    }
  };

  const getSortedTasks = (tasksToSort) => {
    const sorted = [...tasksToSort];
    switch (sortBy) {
      case 'date': return sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      case 'status': return sorted.sort((a, b) => a.completed - b.completed);
      case 'title': return sorted.sort((a, b) => a.title.localeCompare(b.title));
      default: return sorted;
    }
  };

  const filteredAndSortedTasks = getSortedTasks(getFilteredTasks());

  const handleDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = filteredAndSortedTasks.findIndex(t => t.id === active.id);
    const newIndex = filteredAndSortedTasks.findIndex(t => t.id === over.id);

    const reordered = [...filteredAndSortedTasks];
    const [movedItem] = reordered.splice(oldIndex, 1);
    reordered.splice(newIndex, 0, movedItem);

    const updatedTasks = tasks.map(task => {
      const newOrderIndex = reordered.findIndex(item => item.id === task.id);
      return { ...task, order: newOrderIndex };
    });

    setTasks(updatedTasks);
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(prev => !prev)} />
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Box sx={{ mb: 4 }}><TaskForm onAddTask={addTask} /></Box>
          <Box sx={{ mb: 3 }}>
            <FilterBar
              filter={filter}
              setFilter={setFilter}
              sortBy={sortBy}
              setSortBy={setSortBy}
              taskCounts={{
                all: tasks.length,
                completed: tasks.filter(t => t.completed).length,
                pending: tasks.filter(t => !t.completed).length,
              }}
            />
          </Box>
          <DndContext onDragEnd={handleDragEnd}>
            <TaskList
              tasks={filteredAndSortedTasks}
              onUpdateTask={updateTask}
              onDeleteTask={deleteTask}
              onToggleComplete={toggleComplete}
            />
          </DndContext>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;

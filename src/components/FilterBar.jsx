import {
    Box,
    Chip,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Paper,
    Typography,
    useTheme,
    useMediaQuery,
  } from '@mui/material';
  
  const FilterBar = ({ filter, setFilter, sortBy, setSortBy, taskCounts }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
    return (
      <Paper elevation={1} sx={{ p: 2 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: 2,
            alignItems: isMobile ? 'stretch' : 'center',
          }}
        >
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Filter & Sort
          </Typography>
  
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 1,
              flex: 1,
            }}
          >
            <Chip
              label={`All (${taskCounts.all})`}
              variant={filter === 'all' ? 'filled' : 'outlined'}
              color={filter === 'all' ? 'primary' : 'default'}
              onClick={() => setFilter('all')}
              clickable
            />
            <Chip
              label={`Pending (${taskCounts.pending})`}
              variant={filter === 'pending' ? 'filled' : 'outlined'}
              color={filter === 'pending' ? 'warning' : 'default'}
              onClick={() => setFilter('pending')}
              clickable
            />
            <Chip
              label={`Completed (${taskCounts.completed})`}
              variant={filter === 'completed' ? 'filled' : 'outlined'}
              color={filter === 'completed' ? 'success' : 'default'}
              onClick={() => setFilter('completed')}
              clickable
            />
          </Box>
  
          <FormControl size="small" sx={{ minWidth: 120 }}>
            <InputLabel>Sort by</InputLabel>
            <Select
              value={sortBy}
              label="Sort by"
              onChange={(e) => setSortBy(e.target.value)}
            >
              <MenuItem value="date">Date Created</MenuItem>
              <MenuItem value="status">Status</MenuItem>
              <MenuItem value="title">Title</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Paper>
    );
  };
  
  export default FilterBar;
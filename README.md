# 📝 To-Do Manager

A modern, feature-rich task management application built with React and Material-UI. This application helps you organize your tasks with an intuitive interface, drag-and-drop functionality, and persistent storage.

![To-Do Manager](https://img.shields.io/badge/React-18.0.0-blue)
![Material-UI](https://img.shields.io/badge/Material--UI-5.0.0-green)
![Vite](https://img.shields.io/badge/Vite-4.0.0-purple)

## ✨ Features

### 🎯 Core Functionality
- **Create Tasks**: Add new tasks with title and optional description
- **Edit Tasks**: Modify existing task details
- **Delete Tasks**: Remove tasks from your list
- **Mark Complete**: Toggle task completion status
- **Persistent Storage**: Tasks are saved in localStorage and persist across browser sessions

### 🎨 User Interface
- **Modern Design**: Clean and responsive Material-UI interface
- **Dark/Light Mode**: Toggle between dark and light themes
- **Drag & Drop**: Reorder tasks by dragging them
- **Visual Feedback**: Hover effects and smooth animations
- **Responsive Layout**: Works on desktop and mobile devices

### 🔍 Task Management
- **Filter Tasks**: View all, completed, or pending tasks
- **Sort Options**: Sort by date, status, or title
- **Task Status**: Visual indicators for completed and pending tasks
- **Creation Timestamps**: See when each task was created

### 🎮 Interactive Features
- **Drag Handle**: Use the drag indicator to reorder tasks
- **Real-time Updates**: Changes are reflected immediately
- **Smooth Animations**: Enhanced user experience with transitions

## 🚀 Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zaeem-Nadeem/To-do-manager.git
   cd To-do-manager
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🛠️ Technology Stack

### Frontend
- **React 19.1.0** - UI library
- **Material-UI 7.1.2** - Component library and styling
- **@dnd-kit/core** - Drag and drop functionality
- **Vite** - Build tool and development server

### Styling
- **@emotion/react** - CSS-in-JS styling
- **@emotion/styled** - Styled components
- **Material-UI Icons** - Icon library

### Development Tools
- **ESLint** - Code linting
- **Vite** - Fast development and building

## 📁 Project Structure

```
src/
├── components/
│   ├── EditTaskDialog.jsx    # Task editing modal
│   ├── FilterBar.jsx         # Task filtering and sorting
│   ├── Header.jsx            # App header with theme toggle
│   ├── TaskForm.jsx          # New task creation form
│   ├── TaskItem.jsx          # Individual task component
│   └── TaskList.jsx          # Task list container
├── utils/
│   └── storage.js            # localStorage utilities
├── App.jsx                   # Main application component
├── main.jsx                  # Application entry point
└── index.css                 # Global styles
```

## 🎯 How to Use

### Creating Tasks
1. Enter a task title in the input field
2. Optionally add a description
3. Click "Add Task" or press Enter

### Managing Tasks
- **Complete a task**: Click the checkbox next to the task
- **Edit a task**: Click the edit icon (pencil) to open the edit dialog
- **Delete a task**: Click the delete icon (trash) to remove the task
- **Reorder tasks**: Drag the task using the drag handle (three dots)

### Filtering and Sorting
- **Filter**: Use the filter buttons to show all, completed, or pending tasks
- **Sort**: Choose sorting options (date, status, title) from the dropdown
- **Task Count**: View the number of tasks in each category

### Theme Toggle
- Click the theme toggle button in the header to switch between dark and light modes

## 🔧 Key Features Explained

### Drag and Drop
The application uses `@dnd-kit/core` for smooth drag and drop functionality:
- Drag handle is located on the left side of each task
- Visual feedback during dragging
- Tasks maintain their order after reordering

### Local Storage
Tasks are automatically saved to browser localStorage:
- Data persists across browser sessions
- No server required
- Works offline

### Responsive Design
The application is fully responsive:
- Adapts to different screen sizes
- Touch-friendly on mobile devices
- Consistent experience across platforms

## 🎨 Customization

### Adding New Features
The modular component structure makes it easy to add new features:
- Add new components in the `components/` directory
- Extend the task data structure in `App.jsx`
- Update the storage utilities in `utils/storage.js`

### Styling
The application uses Material-UI theming:
- Customize colors in the theme objects
- Modify component styles using the `sx` prop
- Add custom CSS in `index.css`

## 🐛 Troubleshooting

### Common Issues

1. **Tasks not saving**
   - Check if localStorage is enabled in your browser
   - Ensure you're not in incognito/private mode

2. **Drag and drop not working**
   - Make sure you're dragging from the drag handle (three dots)
   - Check browser console for any JavaScript errors

3. **Styling issues**
   - Clear browser cache
   - Ensure all dependencies are installed correctly

### Development Issues

1. **Port already in use**
   ```bash
   # Kill the process using port 5173
   npx kill-port 5173
   ```

2. **Dependencies issues**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Zaeem Nadeem**
- GitHub: [@Zaeem-Nadeem](https://github.com/Zaeem-Nadeem)
- Project: [To-do-manager](https://github.com/Zaeem-Nadeem/To-do-manager)

## 🙏 Acknowledgments

- [Material-UI](https://mui.com/) for the beautiful component library
- [@dnd-kit](https://dndkit.com/) for the excellent drag and drop functionality
- [Vite](https://vitejs.dev/) for the fast development experience
- [React](https://reactjs.org/) for the amazing framework

---

⭐ **Star this repository if you found it helpful!**
import './App.css'
import { Task1 } from './components/task1'
import { Task2 } from './components/task2/index.tsx';
import { Box, Divider } from '@mui/material';

function App() {
  return (
    <div className="App">
      <h2>Task 1</h2>
      <Divider/>
      <Task1/>
      <Box mt={5}>
        <h2>Task 2</h2>
      </Box>
      <Divider/>
      <Task2/>
    </div>
  )
}

export default App
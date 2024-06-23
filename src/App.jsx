import { useState } from 'react'
import './App.css'
import { Button, Container, TextField, Box, Card, CardContent, Grid, Typography, Icon } from '@mui/material'

export default function App() {
  const [todos, setToDos] = useState([])

  const handleFormToDo = (e) => {
    e.preventDefault()
    const toDoData = Object.fromEntries(new FormData(e.target))
    setToDos(prevToDo => [ ...prevToDo, { task: toDoData.task, completed: false }])
    e.target.reset()
  }

  const deleteData = (deleteDataIndex) => {
    setToDos(prevToDo => prevToDo.filter((_, index) => index !== deleteDataIndex))
  } 

  const completedData = (completedDataIndex) => {
    setToDos(prevToDo => prevToDo.map((todo, index) => 
      index === completedDataIndex ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <>
      <Container>
          <Box component="form" onSubmit={handleFormToDo} display="flex" alignItems="center" sx={{ mt: 1 }}>
            <TextField 
              name="task" 
              placeholder='Görev Listesi Ekleyin' 
              required 
              variant="outlined" 
              fullWidth 
              margin="normal"
              style={{ marginRight: '20px' }}
            />
            <Button type="submit" variant="contained" color="primary" style={{ height: '56px', width: '150px' }}>
              Gönder
            </Button>
          </Box>
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {
              todos.map((todo, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card style={{ backgroundColor: todo.completed ? '#00FF00' : '#FFFFFF', position: 'relative' }}>
                    <CardContent>
                      <Typography variant="h6" component="div" style={{textDecoration: todo.completed ? 'line-through' : 'none' }}> 
                        {todo.task}
                      </Typography>
                      <Button variant="contained" color="secondary" onClick={() => deleteData(index)} sx={{ mt: 1, mr: 1 }}>
                        Sil
                      </Button>
                      <Button variant="contained" onClick={() => completedData(index)} sx={{ mt: 1 }}>
                        {todo.completed ? 'Geri Al' : 'Tamamla'}
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))
            }
          </Grid>
      </Container>
    </>
  )
}
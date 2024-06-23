import { useState, useCallback } from 'react';
import { Button, Container, TextField, Box, Card, CardContent, Grid, Typography, Icon } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { deleteData, handleFormToDo, completedData } from './components/ToDoFunctions';

export default function App() {
  const [todos, setToDos] = useState([]);

  const handleForm = useCallback((e) => {
    handleFormToDo(e, setToDos);
  }, [setToDos]);

  const handleDelete = useCallback((index) => {
    deleteData(index, setToDos);
  }, [setToDos]);

  const handleComplete = useCallback((index) => {
    completedData(index, setToDos);
  }, [setToDos]);

  return (
    <>
      <Container>
        <Typography variant="h1" color="inherit" component="div" style={{ textAlign: 'center', fontSize: '50px' }}>
          To Do App
        </Typography>
        <Box component="form" onSubmit={handleForm} display="flex" alignItems="center" sx={{ mt: 1 }}>
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
                    <Typography variant="h6" component="div" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}> 
                      {todo.task}
                    </Typography>
                    <Button variant="contained" color="secondary" onClick={() => handleDelete(index)} sx={{ mt: 1, mr: 1 }}>
                      Sil
                    </Button>
                    <Button variant="contained" onClick={() => handleComplete(index)} sx={{ mt: 1 }}>
                      {todo.completed ? 'Geri Al' : 'Tamamla'}
                    </Button>
                  </CardContent>
                  {todo.completed && (
                    <Icon component={CloseIcon} style={{ position: 'absolute', top: 0, right: 0, color: '#fff', fontSize: '2rem' }} />
                  )}
                </Card>
              </Grid>
            ))
          }
        </Grid>
      </Container>
    </>
  );
}
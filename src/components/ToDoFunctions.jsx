import { useCallback } from 'react';

export const handleFormToDo = useCallback((e, setToDos) => {
    e.preventDefault();
    const toDoData = Object.fromEntries(new FormData(e.target));
    setToDos(prevToDo => [...prevToDo, { task: toDoData.task, completed: false }]);
    e.target.reset();
}, []);

export const deleteData = useCallback((deleteDataIndex, setToDos) => {
    setToDos(prevToDo => prevToDo.filter((_, index) => index !== deleteDataIndex));
}, []);

export const completedData = useCallback((completedDataIndex, setToDos) => {
    setToDos(prevToDo => prevToDo.map((todo, index) =>
        index === completedDataIndex ? { ...todo, completed: !todo.completed } : todo
    ));
}, []);

export const handleFormToDo = (e, setToDos) => {
    e.preventDefault();
    const toDoData = Object.fromEntries(new FormData(e.target));
    const now = new Date()
    setToDos(prevToDo => [...prevToDo, { task: toDoData.task, completed: false,dateAdded: now.toLocaleDateString() }]);
    e.target.reset();
};

export const deleteData = (deleteDataIndex, setToDos) => {
    setToDos(prevToDo => prevToDo.filter((_, index) => index !== deleteDataIndex));
};

export const completedData = (completedDataIndex, setToDos) => {
    setToDos(prevToDo => prevToDo.map((todo, index) =>
        index === completedDataIndex ? { ...todo, completed: !todo.completed } : todo
    ));
};
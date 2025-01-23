import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import SearchBox from './components/SearchBox'
import initialTasks  from './PersonList.json'
import { useState } from 'react'

function App() {

  const [tasks, setTasks] = useState(initialTasks);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  


  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
    console.log("test task", newTask);
  };

  const deleteTask = (taskId) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.id !== taskId);
    });
  };

  

  return (
    <>
      <div className='d-flex flex-column justify-content-center align-item-center mx-auto my-0 w-25'>
        <h1 className='bg-primary color'>Phonebook</h1>
        <ContactForm onAdd={addTask}/>
        <SearchBox  searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
        <ContactList persons={filteredTasks} onDelete={deleteTask}/>
      </div>
    </>
  )
}

export default App

import ContactForm from './components/ContactForm'
import ContactList from './components/ContactList'
import SearchBox from './components/SearchBox'
import initialTasks  from './PersonList.json'
import { useState, useEffect } from 'react'

function App() {

  const initialPersons = JSON.parse(localStorage.getItem('persons')) || initialTasks;

  const [person, setPerson] = useState(initialPersons);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    localStorage.setItem('persons', JSON.stringify(person));
  }, [person]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredPersons = person.filter((person) =>
    person.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addPerson = (newPerson) => {
    setPerson((prevPersons) => [...prevPersons, newPerson]);
  };

  const deletePerson = (personId) => {
    setPerson((prevPersons) => {
      return prevPersons.filter((person) => person.id !== personId);
    });
  };

  return (
    <>
      <div className='d-flex flex-column justify-content-center align-item-center mx-auto my-0 w-25'>
        <h1 className='bg-warning color text-center p-3 rounded-4'>Phonebook</h1>
        
        <div className='d-flex justify-content-between align-item-center w-100 my-3'>
          <SearchBox  searchTerm={searchTerm} onSearchChange={handleSearchChange}/>
          <ContactForm onAdd={addPerson}/>
        </div>

        <ContactList persons={filteredPersons} onDelete={deletePerson}/>
      </div>
    </>
  )
}

export default App

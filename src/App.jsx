import { useState, useEffect } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContacList/ContactList";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) || []
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const [filter, setFilter] = useState("");

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleAddContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  const handleDeleteContact = (id) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== id)
    );
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;

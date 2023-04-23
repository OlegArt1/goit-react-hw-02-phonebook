import { Component } from 'react';
import { ContactForm } from "./form/ContactForm";
import { ContactList } from "./contacts_list/ContactsList";
import { Filter } from "./filter/Filter";
import { nanoid } from 'nanoid';

class App extends Component
{
    state =
    {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' }
        ], filter: ''
    }
    constructor()
    {
        super();
        this.handleChange = this.handleChange.bind(this);
        this.handleAddContact = this.handleAddContact.bind(this);
        this.handleDeleteContact = this.handleDeleteContact.bind(this);
        this.Filter = this.Filter.bind(this);
    }
    handleChange = evt =>
    {
        const {name, value} = evt.currentTarget;

        this.setState({ [name]: value });
    }
    handleAddContact = ({ name, number }) =>
    {
        let newId = 'id-' + nanoid(3);
        
        let list = this.state.contacts;
    
        if (list.some(value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()))
        {
            alert(`This "${name}" is already in contacts`);
        }
        else
        {
            list.push({ id: newId, name: name, number: number });
            
            this.setState({ contacts: list });
        }
    }
    handleDeleteContact = e =>
    {
        e.preventDefault();
      
        const id = e.currentTarget.id;
      
        const filter_contact = this.state.contacts.filter(item => item.id !== id);
      
        this.setState({ contacts: filter_contact });
    }
    Filter = () =>
    {
        const { contacts, filter } = this.state;

        const filteredContacts = contacts.filter(contact => contact.name.toLowerCase().includes(filter.toLowerCase()));
        
        return filteredContacts;
    }
    render ()
    {
        const { filter } = this.state;

        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <h1 style={{ padding: 20, textAlign: 'center' }}>Phonebook</h1>
                <br/>
                <ContactForm addContact={this.handleAddContact}/>
                <h2 style={{ padding: 20, textAlign: 'center' }}>Contacts</h2>
                <Filter filter={filter} filter_change={this.handleChange}/>
                <ContactList contacts={this.Filter()} delete_contact={this.handleDeleteContact}></ContactList>
            </div>
        );
    }
};
export default App;
import React, { Component } from "react";
import { ContactForm } from "./form/ContactForm";
import { ContactList } from "./contacts_list/ContactsList";
import { Filter } from "./filter/Filter";
import Css from "./form/ContactForm.module.css";
import { nanoid } from 'nanoid';

const LOCALE_STORAGE_KEY = "contacts_user";

class App extends Component
{
    state =
    {
        contacts:
        [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        ],
        filter: '',
    }
    componentDidMount = () =>
    {
        const saved_recipes = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY));

        if (saved_recipes !== null)
        {
            this.setState({ contacts: saved_recipes });
        }
        else
        {
            this.handleSaveContact(this.state.contacts);
        }
    }
    componentDidUpdate = (prevProps, prevState) =>
    {
        if (prevState.recipes !== this.state.recipes)
        {
            localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(this.state.contacts));
        }
    }
    handleChange = evt =>
    {
        const { name, value } = evt.currentTarget;

        this.setState({ [name]: value });
    }
    handleAddContact = ({ name, number }) =>
    {
        let id = nanoid();

        let list = this.state.contacts;

        if (list.some(value => value.name.toLocaleLowerCase() === name.toLocaleLowerCase()))
        {
            alert(`This "${name}" is already in contacts!`);
        }
        else
        {
            list.push({ id: id, name: name, number: number });
            
            this.handleSaveContact(list);
        }
    }
    handleSaveContact = data =>
    {
        localStorage.setItem(LOCALE_STORAGE_KEY, JSON.stringify(data));

        const items = JSON.parse(localStorage.getItem(LOCALE_STORAGE_KEY));

        this.setState({ contacts: items });
    }
    handleDeleteContact = e =>
    {
        e.preventDefault();
      
        const id = e.currentTarget.id;

        const filter_contact = this.state.contacts.filter(item => item.id !== id);
      
        this.setState({ contacts: filter_contact });

        localStorage.removeItem(LOCALE_STORAGE_KEY);
    }
    handleFilter = () =>
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
                <h1 className={Css.contact_form__title} style={{ color: 'limegreen' }}>Phonebook</h1>
                <br/>
                <ContactForm addContact={this.handleAddContact}/>
                <h1 className={Css.contact_form__title} style={{ color: 'blue' }}>Contacts</h1>
                <Filter filter={filter} filter_change={this.handleChange}/>
                <ContactList contacts={this.handleFilter()} delete_contact={this.handleDeleteContact}></ContactList>
            </div>
        );
    }
};
export default App;
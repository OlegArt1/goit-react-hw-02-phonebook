import { Component } from 'react';
import Css from "./ContactForm.module.css";

export class ContactForm extends Component
{
    state =
    {
        name: '', number: ''
    };
    handleSubmit = e =>
    {
        e.preventDefault();
        
        this.props.addContact(this.state);
        
        this.setState({ name: '', number: '' });
    }
    handleChange = evt =>
    {
        const { name, value } = evt.currentTarget;

        this.setState({ [name]: value });
    }
    handleClick = () =>
    {
        const data_save = { name: this.state.name, number: this.state.number };

        localStorage.setItem("contacts_user", JSON.stringify(data_save));
    }
    render()
    {
        const { name, number } = this.state;

        return (
            <form className={Css.contact_form} onSubmit={this.handleSubmit}>
                <label className={Css.contact_form__label}>
                    <span style={{ color: 'magenta' }}><i>Name</i></span>
                    <input className={Css.contact_form__input_name} type="text" name="name" value={name}
                           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                           placeholder='Enter name' onChange={this.handleChange} required/>
                </label>
                <label className={Css.contact_form__label}>
                    <span style={{ color: 'magenta' }}><i>Number</i></span>
                    <input className={Css.contact_form__input_number} type="tel" name="number" value={number}
                           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                           placeholder='Enter phone' onChange={this.handleChange} required/>
                </label>
                <div className={Css.contact_form__block}>
                    <button className={Css.contact_form__button} type="submit" onClick={this.handleClick}>Add contact</button>
                </div>
            </form>
        );
    }
}
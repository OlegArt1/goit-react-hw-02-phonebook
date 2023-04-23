import { Component } from 'react';
import PropTypes from 'prop-types';
import Css from "./ContactForm.module.css";

export class ContactForm extends Component
{
    state =
    {
        name: '', number: ''
    };
    constructor()
    {
        super();

        this.handleChange = this.handleChange.bind(this);
    }
    handleChange = evt =>
    {
        const {name, value} = evt.currentTarget;

        this.setState({[name]: value});
    }
    render()
    {
        return (
            <form className={Css.add_form} onSubmit={evt => { evt.preventDefault(); this.props.addContact(this.state); this.setState( {name: '', number: ''}); }}>
                <label className={Css.label_form}>
                    <span>Name</span>
                    <input className={Css.input_name} type="text" name="name" value={this.state.name}
                           pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                           title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                           onChange={this.handleChange} required/>
                </label>
                <label className={Css.label_form}>
                    <span>Number</span>
                    <input className={Css.input_number} type="tel" name="number" value={this.state.number}
                           pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                           title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                           onChange={this.handleChange} required/>
                </label>
                <p className={Css.block}>
                    <button className={Css.button_form} type="submit">Add contact</button>
                </p>
            </form>
        );
    }
}
ContactForm.propTypes =
{
    addContact: PropTypes.func.isRequired
};
import PropTypes from 'prop-types';
import Css from "./ContactsList.module.css";
import { nanoid } from 'nanoid';

export const ContactList = ({ contacts, delete_contact }) =>
{
    const ListId = nanoid();

    return (
        <ul className={Css.contact__list}>
            {contacts.map(contact => {
                return (
                    <li className={Css.contact__item}>
                        <label className={Css.contact__label} htmlFor={ListId}>
                            <b>Name:&nbsp;&nbsp;&nbsp;</b>
                             <span id={ListId} style={{ color: 'lightgreen' }}>{contact.name};</span>
                        </label>
                        <label className={Css.contact__label} htmlFor={ListId}>
                            <b>Phone:&nbsp;&nbsp;&nbsp;</b>
                            <span id={ListId} style={{ color: 'lightseagreen' }}>{contact.number};</span>
                        </label>
                        <button id={contact.id} className={Css.contact__button_close} type="button" onClick={delete_contact}>X</button>
                    </li>
                );
            })}
        </ul>
    );
}
ContactList.prototype =
{
    contacts: PropTypes.string.isRequired,
    delete_contact: PropTypes.func.isRequired,
};
import PropTypes from 'prop-types';
import Css from "./ContactsList.module.css";
import { nanoid } from 'nanoid';

export const ContactList = ({contacts, delete_contact}) =>
{
    const ListId = nanoid();

    return (
        <ul className={Css.list}>
            {contacts.map(contact =>
            {
                return (
                    <li className={Css.item}>
                        <a className={Css.link} href='#'>
                            <label className={Css.label} htmlFor={ListId}>
                                <b>Name:&nbsp;&nbsp;&nbsp;</b>
                                <span id={ListId}>{contact.name};</span>
                            </label>
                            <label className={Css.label} htmlFor={ListId}>
                                <b>Phone:&nbsp;&nbsp;&nbsp;</b>
                                <span id={ListId}>{contact.number};</span>
                            </label>
                            <button id={contact.id} className={Css.button} type="button" onClick={delete_contact}>remove</button>
                        </a>
                        <br/><br/><br/>
                    </li>
                );
            })}
        </ul>
    );
}
ContactList.prototype =
{
    contacts: PropTypes.func.isRequired,
    delete_contact: PropTypes.func.isRequired
};
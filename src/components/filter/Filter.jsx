import PropTypes from 'prop-types';
import Css from "./Filter.module.css";

export const Filter = ({ filter, filter_change }) =>
{
    return (
        <div className={Css.filter__form}>
            <label htmlFor="Find">
                <span style={{ color: 'magenta' }}><i>Filter name</i></span>
                <input className={Css.filter__input} type="text" name="filter" value={filter}
                       pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                       placeholder="Enter name" onChange={filter_change} required/>
            </label>
        </div>
    );
}
Filter.propTypes =
{
    filter: PropTypes.string.isRequired,
    filter_change: PropTypes.func.isRequired
};